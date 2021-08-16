import { URL_BASE } from './../../../global/http';
import { UserModel } from './../model/users.model';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: Array<UserModel> = [
    // {
    //   id: '1',
    //   name: 'Isael Junior',
    //   email: 'isael@gmail.com',
    //   imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
    //   cpf: '11229338488',
    //   password: '111',
    //   codename: 'Isael',
    //   graduation: 'string',
    //   description: 'string',
    //   isAdmin: true,
    //   isActivate: true,
    //   alteredAt: new Date(),
    //   createdAt: new Date(),
    // },
  ];
  constructor(private httpClient: HttpClient) {
    // this.users = httpClient.get<Array<UserModel>>(URL_BASE + '/users');
  }
  // login(){
  //   this.http
  //   .post(`${URL_BASE}/users/login`, { email, password })
  //   .subscribe((user) => {
  //     sessionStorage.setItem(
  //       'currentUser',
  //       JSON.stringify(user as UserModel)
  //     );
  //     return this.router.navigateByUrl('home');
  //   });
  // }
  getUsers() {
    return this.httpClient.get<UserModel>(URL_BASE + '/users');
  }
  getUsersById(id: string) {
    return this.users.find((user) => user.id === id);
  }
  getUserByEmailAndPassword(email: string, password: string) {
    // return this.users.find(
    //   (user) => user.email === email && user.password === password
    // );
    return this.httpClient.post<UserModel>(URL_BASE + '/users/login', {
      email,
      password,
    });
  }
}
