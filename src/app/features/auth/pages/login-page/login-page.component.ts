import { UsersService } from './../../../users/services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  decorationImageUrl: string =
    'https://images.unsplash.com/photo-1555597673-b21d5c935865?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFydGlhbCUyMGFydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  constructor(private usersService: UsersService, private router: Router) {}

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
          console.log('usuario ou senha incorretos');
          sessionStorage.clear();

          return this.router.navigateByUrl('login');
        }

        this.router.navigateByUrl('home');
        return sessionStorage.setItem('currentUser', JSON.stringify(user));
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
