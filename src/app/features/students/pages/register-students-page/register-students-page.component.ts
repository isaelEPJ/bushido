import { FailDialogComponent } from './../../../../shared/components/dialogs/fail-dialog/fail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from './../../services/students.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SucessDialogComponent } from 'src/app/shared/components/dialogs/sucess-dialog/sucess-dialog.component';

@Component({
  selector: 'app-register-students-page',
  templateUrl: './register-students-page.component.html',
  styleUrls: ['./register-students-page.component.scss'],
})
export class RegisterStudentsPageComponent implements OnInit {
  bjjBelts = this.studentsService.bjjBelts;
  titleText: string = 'Cadastro de Alunos';

  constructor(
    private studentsService: StudentsService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  registerStudentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(8)]),
    paymentDetail: new FormControl(100, [Validators.required]),
    details: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    lastGraduationDetail: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    phone: new FormControl('', [Validators.required]),
    location_rua: new FormControl('', [Validators.required]),
    location_cidade: new FormControl('', [Validators.required]),
    location_estado: new FormControl('', [Validators.required]),
    location_numero: new FormControl('', [Validators.required]),
    location_cep: new FormControl('', [Validators.required]),
    graduation: new FormControl([Validators.required]),
    imageUrl: new FormControl(),
    age: new FormControl(),
    timePratice: new FormControl(),
  });

  createStudent(registerStudentForm: FormGroup) {
    const registerStudentValue = registerStudentForm.value;
    if (!registerStudentValue) {
      this._dialog.open(FailDialogComponent, {
        width: '350px',
        data: {
          title: 'Erro',
          message: 'Ops, ocorreu um problema',
        },
      });
    }

    registerStudentValue.name,
      registerStudentValue.email,
      registerStudentValue.cpf,
      registerStudentValue.imageUrl,
      registerStudentValue.graduation,
      registerStudentValue.age,
      registerStudentValue.timePratice,
      registerStudentValue.paymentDetail,
      registerStudentValue.details,
      registerStudentValue.lastGraduationDetail,
      registerStudentValue.phone,
      registerStudentValue.location_rua,
      registerStudentValue.location_cidade,
      registerStudentValue.location_estado,
      registerStudentValue.location_numero,
      registerStudentValue.location_cep,
      this.studentsService
        .createStudent(
          registerStudentValue.name,
          registerStudentValue.email,
          registerStudentValue.cpf,
          registerStudentValue.imageUrl,
          registerStudentValue.graduation,
          registerStudentValue.age,
          registerStudentValue.timePratice,
          registerStudentValue.paymentDetail,
          registerStudentValue.details,
          registerStudentValue.lastGraduationDetail,
          registerStudentValue.phone,
          registerStudentValue.location_rua,
          registerStudentValue.location_cidade,
          registerStudentValue.location_estado,
          registerStudentValue.location_numero,
          registerStudentValue.location_cep
        )
        .subscribe(
          (student) => {
            registerStudentForm.reset();

            this._dialog.open(SucessDialogComponent, {
              width: '350px',
              data: {
                title: 'Sucesso',
                message: 'Aluno cadastrado com sucesso',
              },
            });
          },
          (error) => {
            console.log(error);

            this._dialog.open(FailDialogComponent, {
              width: '350px',
              data: {
                title: 'Ocorreu um erro',
                message: error,
              },
            });
          }
        );
  }
}
