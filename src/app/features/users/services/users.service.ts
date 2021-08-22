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

  users: Array<UserModel> = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const getUsers = this.httpClient.get<Array<UserModel>>(URL_BASE + '/users');
  }

  getUsers() {
    return this.httpClient.get<Array<UserModel>>(URL_BASE + '/users');
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
    return this.httpClient.post(URL_BASE + '/users/create', {
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
      isSensei: false,
    });
  }
  getUserByEmailAndPassword(email: string, password: string) {
    return this.httpClient.post<UserModel>(URL_BASE + '/users/login', {
      email,
      password,
    });
  }
}
