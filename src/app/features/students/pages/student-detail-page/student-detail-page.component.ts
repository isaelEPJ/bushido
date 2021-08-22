import { StudentsService } from './../../services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../model/student.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { FailDialogComponent } from 'src/app/shared/components/dialogs/fail-dialog/fail-dialog.component';

@Component({
  selector: 'app-student-detail-page',
  templateUrl: './student-detail-page.component.html',
  styleUrls: ['./student-detail-page.component.scss'],
})
export class StudentDetailPageComponent implements OnInit {
  @Input() student?: Student;
  panelOpenState = false;

  titleText?: string = 'Aluno(a)';

  constructor(
    private activateRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (params) => {
        this.studentsService.findStudentById(params.id).subscribe((std) => {
          this.student = std;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  removeStudent(id: string) {
    this.studentsService.removeStudent(id).subscribe(
      (studentToRemove) => {
        this.dialog.open(ConfirmationDialogComponent, {
          width: '350px',
          data: {
            title: 'Sucesso',
            content: 'Usuário removido',
          },
        });
      },
      (error) => {
        this.dialog.open(FailDialogComponent, {
          width: '350px',
          data: {
            title: 'Ops, ocorreu um erro',
            content: 'Ocorreu um erro na remoçao do Aluno',
          },
        });
      }
    );
  }
}
