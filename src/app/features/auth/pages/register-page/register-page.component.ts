import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/features/users/services/users.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
  }

  decorationImageUrl: string =
    'https://images.unsplash.com/photo-1607031767898-5f319512ff1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnRpYWwlMjBhcnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

  userForm = new FormGroup({
    login: new FormControl(),
    email: new FormControl(),
    document: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {}
  handleRegisterUser(loginForm: FormGroup) {
    const userFormValue = loginForm.value;
    if (!userFormValue) {
      console.error('Erro no login');
    }
    const user = this.usersService.getUserByEmailAndPassword(
      userFormValue.login,
      userFormValue.password
    );
    if (!user) {
      console.log('usuario ou senha incorretos');
      sessionStorage.clear();

      return this.router.navigateByUrl('login');
    }
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    return this.router.navigateByUrl('home');
  }

  SignOut() {
    sessionStorage.clear();
    return this.router.navigateByUrl('login');
  }
  redirectToLogin() {
    this.userForm.reset();
    return this.router.navigateByUrl('login');
  }
}
