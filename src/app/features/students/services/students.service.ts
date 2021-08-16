import { Student } from './../model/student.mode';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  students: Array<Student> = [
    {
      id: '1',
      name: 'isael',
      email: 'ii@aa.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '2',
      name: 'cherry',
      email: 'cherry@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '3',
      name: 'benedito',
      email: 'bene@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '444',
      paymentDetail: 100,
      delayMonthPayment: 3,
      aditionalRate: 50,
      graduation: 'white-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '4',
      name: 'flora',
      email: 'flora@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '3333333333',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'purple-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '5',
      name: 'luiz',
      email: 'luiz@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 110,
      delayMonthPayment: 5,
      aditionalRate: 70,
      graduation: 'brown-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '1',
      name: 'isael',
      email: 'ii@aa.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '2',
      name: 'cherry',
      email: 'cherry@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '3',
      name: 'benedito',
      email: 'bene@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '444',
      paymentDetail: 100,
      delayMonthPayment: 3,
      aditionalRate: 50,
      graduation: 'white-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '4',
      name: 'flora',
      email: 'flora@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '3333333333',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'purple-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '5',
      name: 'luiz',
      email: 'luiz@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 110,
      delayMonthPayment: 5,
      aditionalRate: 70,
      graduation: 'brown-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '1',
      name: 'isael',
      email: 'ii@aa.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '2',
      name: 'cherry',
      email: 'cherry@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '3',
      name: 'benedito',
      email: 'bene@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '444',
      paymentDetail: 100,
      delayMonthPayment: 3,
      aditionalRate: 50,
      graduation: 'white-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '4',
      name: 'flora',
      email: 'flora@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '3333333333',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'purple-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '5',
      name: 'luiz',
      email: 'luiz@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 110,
      delayMonthPayment: 5,
      aditionalRate: 70,
      graduation: 'brown-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '1',
      name: 'isael',
      email: 'ii@aa.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '2',
      name: 'cherry',
      email: 'cherry@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '3',
      name: 'benedito',
      email: 'bene@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '444',
      paymentDetail: 100,
      delayMonthPayment: 3,
      aditionalRate: 50,
      graduation: 'white-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '4',
      name: 'flora',
      email: 'flora@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '3333333333',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'purple-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '5',
      name: 'luiz',
      email: 'luiz@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 110,
      delayMonthPayment: 5,
      aditionalRate: 70,
      graduation: 'brown-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '1',
      name: 'isael',
      email: 'ii@aa.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '2',
      name: 'cherry',
      email: 'cherry@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '3',
      name: 'benedito',
      email: 'bene@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '444',
      paymentDetail: 100,
      delayMonthPayment: 3,
      aditionalRate: 50,
      graduation: 'white-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '4',
      name: 'flora',
      email: 'flora@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '3333333333',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'purple-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '5',
      name: 'luiz',
      email: 'luiz@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 110,
      delayMonthPayment: 5,
      aditionalRate: 70,
      graduation: 'brown-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '1',
      name: 'isael',
      email: 'ii@aa.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '2',
      name: 'cherry',
      email: 'cherry@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'black-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '3',
      name: 'benedito',
      email: 'bene@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '444',
      paymentDetail: 100,
      delayMonthPayment: 3,
      aditionalRate: 50,
      graduation: 'white-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '4',
      name: 'flora',
      email: 'flora@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '3333333333',
      paymentDetail: 100,
      delayMonthPayment: 0,
      aditionalRate: 0,
      graduation: 'purple-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: true,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
    {
      id: '5',
      name: 'luiz',
      email: 'luiz@mail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/70731079?v=4',
      cpf: '11122233344455',
      paymentDetail: 110,
      delayMonthPayment: 5,
      aditionalRate: 70,
      graduation: 'brown-belt',
      observation: 'Sem Observaçoes',
      isActivate: true,
      paymentInDay: false,
      startDate: '2008-01-14T04:33:35Z',
      createdAt: '2008-01-14T04:33:35Z',
      alteredAt: '2008-01-14T04:33:35Z',
    },
  ];

  listStudents() {
    return this.students;
  }
  findStudentsByName(name: string) {
    return this.students.find((student) => student.name == name);
  }
  getUserById(id: string) {
    return this.students.find((student) => student.id === id);
  }
}