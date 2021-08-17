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
  bjjBelts = [
    { id: 1, belt: 'Faixa branca' },
    { id: 2, belt: 'faixa azul' },
    { id: 3, belt: 'faixa roxa' },
    { id: 4, belt: 'faixa marrom' },
    { id: 5, belt: 'faixa preta' },
  ];

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
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<UserModel>(URL_BASE + '/users');
  }
  getUsersById(id: string) {
    return this.users.find((user) => user.id === id);
  }
  createUser(
    name: string,
    imageUrl: string,
    email: string,
    password: string,
    codename: string,
    cpf: string,
    graduation: string
  ) {
    return this.httpClient.post<UserModel>( 'http://localhost:3000/users/login/create', {
      name,
      imageUrl,
      email,
      password,
      codename,
      cpf,
      graduation,
      description: '',
      isAdmin: true,
      isActivate: true,
    });
  }
  getUserByEmailAndPassword(email: string, password: string) {
    // return this.users.find(
    //   (user) => user.email === email && user.password === password
    // );
    return this.httpClient.post<UserModel>(
      'http://localhost:3000/users/login',
      {
        email,
        password,
      }
    );
  }
}
