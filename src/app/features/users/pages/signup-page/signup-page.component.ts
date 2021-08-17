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
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    private usersService: UsersService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  bjjBelts = this.usersService.bjjBelts;
  decorationImageUrl: string =
    'https://images.unsplash.com/photo-1607031767898-5f319512ff1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnRpYWwlMjBhcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  signUpForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    cpf: new FormControl(),
    codename: new FormControl(),
    graduation: new FormControl(),
    // isAdmin: new FormControl(),
    password: new FormControl(),
    urlimage: new FormControl(),
  });

  createUser(newUserForm: FormGroup) {
    const userValue = newUserForm.value;
    if (!userValue) {
      console.log('problema nas informaoes dp cadastroo');
    }
    this.usersService.createUser(
      userValue.name,
      userValue.email,
      userValue.cpf,
      userValue.codename,
      userValue.graduation,
      userValue.password,
      userValue.urlimage
    );
    console.log(
      userValue.name,
      userValue.email,
      userValue.cpf,
      userValue.codename,
      userValue.graduation,
      userValue.password,
      userValue.urlimage
    );

    this.openSnackBar('Usuario cadastrado', 'ok');
  }
  redirectToLogin() {
    this.signUpForm.reset();
    return this.router.navigateByUrl('login');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
    });
  }
}
