import { FailDialogComponent } from './../../../shared/components/dialogs/fail-dialog/fail-dialog.component';
import { ConfirmationDialogComponent } from './../../../shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { URL_BASE } from './../../../global/http';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  bjjBelts = [
    { id: 1, belt: 'Faixa branca' },
    { id: 2, belt: 'faixa azul' },
    { id: 3, belt: 'faixa roxa' },
    { id: 4, belt: 'faixa marrom' },
    { id: 5, belt: 'faixa preta' },
  ];
  constructor(private httpClient: HttpClient, private dialog: MatDialog) {}

  // students: Array<Student> = [];

  // getStudents() {
  //   return this.httpClient.get<Array<Student>>(URL_BASE + '/students');
  // }

  listStudents() {
    return this.httpClient.get<Array<Student>>(URL_BASE + '/students');
  }
  findStudentsByCpf(cpf: string) {
    return this.httpClient.get<Student>(URL_BASE + '/students/cpf', {
      params: { cpf },
    });
  }
  findStudentById(id: string) {
    return this.httpClient.get<Student>(URL_BASE + '/students/id/' + id);
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
    return this.httpClient.post<Student>(URL_BASE + '/students/create', {
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
  // findStudentsByName(name: string) {
  //   return this.students.find((student) => student.name == name);
  // }
  // getUserById(id: string) {
  //   return this.students.find((student) => student.id === id);
  // }
  removeStudent(id: string) {
    return this.httpClient.delete(URL_BASE + '/students/delete/' + id);
  }
}
