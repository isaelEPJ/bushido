import { UserModel } from './../../model/users.model';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from './../../../users/services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FailDialogComponent } from 'src/app/shared/components/dialogs/fail-dialog/fail-dialog.component';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent implements OnInit {
  decorationImageUrl: string =
    'https://images.unsplash.com/photo-1555597673-b21d5c935865?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFydGlhbCUyMGFydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  constructor(
    private usersService: UsersService,
    private router: Router,
    private _dialog: MatDialog
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action, {
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //     duration: 5000,
  //   });
  // }

  hide: boolean = true;

  userForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(10),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {}
  validateLogin(loginForm: FormGroup) {
    const userFormValue = loginForm.value;
    if (!userFormValue) {
      this._dialog.open(FailDialogComponent, {
        width: '300px',
        data: {
          title: 'Ocorreu um erro',
          message:
            'Ops! alguma informaçao errada, tente novamente ou entre em contato conosco',
        },
      });
    }
    this.usersService
      .getUserByEmailAndPassword(userFormValue.login, userFormValue.password)
      .subscribe(
        (user) => {
          if (!user) {
            this._dialog.open(FailDialogComponent, {
              width: '300px',
              data: {
                title: 'Erro',
                message: 'Usuário não encontrado',
              },
            });

            this._dialog.open(FailDialogComponent, {
              width: '350px',
              data: {
                title: 'Erro',
                message: 'Tente novamente',
              },
            });
          }
          if (
            user.email === userFormValue.login ||
            (user.password === userFormValue.password && (user as UserModel))
          ) {
            this.router.navigateByUrl('home');
            return sessionStorage.setItem('currentUser', JSON.stringify(user));
          }
          this._dialog.open(FailDialogComponent, {
            width: '350px',
            data: {
              message: 'Erro na autenticaçao, tente novamente',
            },
          });
        },
        (error) => {
          this._dialog.open(FailDialogComponent, {
            width: '300px',
            data: {
              title: 'Ocorreu um problema',
              message: error.error,
            },
          });
        }
      );
  }

  SignOut() {
    sessionStorage.clear();
    return this.router.navigateByUrl('login');
  }
  redirectToRegister() {
    sessionStorage.clear();
    return this.router.navigateByUrl('register');
  }
}
