import { UsersService } from './../../../users/services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
    });
  }

  hide: boolean = true;

  userForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {}
  validateLogin(loginForm: FormGroup) {
    const userFormValue = loginForm.value;
    if (!userFormValue) {
      console.error('Erro no login:informaçoes erradas');
    }
    this.usersService
      .getUserByEmailAndPassword(userFormValue.login, userFormValue.password)
      .subscribe((user) => {
        if (!user) {
          this.openSnackBar('Houve um problema no login', 'Tentar novamente');
          sessionStorage.clear();
          return this.router.navigateByUrl('login');
        }
        if (
          user.email === userFormValue.login &&
          user.password === userFormValue.password
        ) {
          this.router.navigateByUrl('home');
          return sessionStorage.setItem('currentUser', JSON.stringify(user));
        }

        this.openSnackBar('Email ou Senha incorretos', 'Tentar novamente');
      });
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
