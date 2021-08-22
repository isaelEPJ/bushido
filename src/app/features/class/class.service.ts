import { Class } from './model/class.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { URL_BASE } from 'src/app/global/http';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  constructor(private httpClient: HttpClient, private dialog: MatDialog) {}

  listClasses() {
    return this.httpClient.get<Array<Class>>(URL_BASE + '/class');
  }
  findClassessBySensei(sensei: string) {
    return this.httpClient.get<Class>(URL_BASE + '/class/sensei', {
      params: { sensei },
    });
  }
  findClassesById(id: string) {
    return this.httpClient.get<Class>(URL_BASE + '/class/id/' + id);
  }
  createStudent(
    name: string,
    email: string,
    cpf: string,
    imageUrl: string,
    graduation: string,
    age: number,
    timePratice: number,
    paymentDetail: number,
    details: string,
    lastGraduationDetail: string,
    phone: string,
    location_rua: string,
    location_cidade: string,
    location_estado: string,
    location_numero: string,
    location_cep: string
  ) {
    return this.httpClient.post<Class>(URL_BASE + '/class/create', {
      name,
      email,
      cpf,
      imageUrl,
      graduation,
      age,
      timePratice,
      paymentDetail,
      details,
      lastGraduationDetail,
      phone,
      location_rua,
      location_cidade,
      location_estado,
      location_numero,
      location_cep,
    });
  }
  removeClass(id: string) {
    return this.httpClient.delete(URL_BASE + '/class/delete/' + id);
  }
}
