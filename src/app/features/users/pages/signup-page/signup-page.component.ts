import { SucessDialogComponent } from './../../../../shared/components/dialogs/sucess-dialog/sucess-dialog.component';
import { FailDialogComponent } from './../../../../shared/components/dialogs/fail-dialog/fail-dialog.component';
import { UsersService } from './../../../users/services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    private usersService: UsersService,
    private router: Router,
    private _dialog: MatDialog
  ) {}
  bjjBelts = this.usersService.bjjBelts;
  decorationImageUrl: string =
    'https://images.unsplash.com/photo-1607031767898-5f319512ff1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnRpYWwlMjBhcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(5)]),
    codename: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    graduation: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl(),
    urlimage: new FormControl(),
  });

  createUser(newUserForm: FormGroup) {
    const userValue = newUserForm.value;

    if (!userValue) {
      this._dialog.open(FailDialogComponent, {
        width: '350px',
        data: {
          title: 'Ocorreu um erro',
          message: 'Problema nas Informaçoes do cadastro',
        },
      });
    }
    this.usersService
      .createUser(
        userValue.name,
        userValue.urlimage,
        userValue.email,
        userValue.password,
        userValue.codename,
        userValue.cpf,
        userValue.graduation
      )
      .subscribe(
        (userResult) => {
          this._dialog.open(SucessDialogComponent, {
            width: '350px',
            data: {
              title: 'Sucesso',
              message: 'Usuário cadastrado com sucesso',
            },
          });
          this.signUpForm.reset();
          this.router.navigateByUrl('/login');
        },
        (error) => {
          console.log(error);

          this._dialog.open(FailDialogComponent, {
            width: '350px',
            data: {
              message:
                error.error ||
                'Ops! alguma informaçao errada, tente novamente ou entre em contato conosco',
            },
          });
        }
      );
  }
  redirectToLogin() {
    this.signUpForm.reset();
    return this.router.navigateByUrl('login');
  }

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action, {
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //     duration: 5000,
  //   });
  // }
}
