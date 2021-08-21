import { FailDialogComponent } from 'src/app/shared/components/dialogs/fail-dialog/fail-dialog.component';
import { Student } from '../../model/student.model';
import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  students: Array<Student> = [];

  titleText: string = 'Meus Alunos';

  constructor(
    private studentsService: StudentsService,
    private dialog: MatDialog
  ) {
    // this.students = studentsService.listStudents();
  }

  ngOnInit(): void {
    this.studentsService.listStudents().subscribe(
      (students) => {
        this.students = students;
      },
      (error) => {
        this.dialog.open(FailDialogComponent, {
          width: '350',
          data: {
            title: 'Ops, Ocorreu um problema',
            content: 'Ocorreu um problema ao listar os Alunos',
          },
        });
      }
    );
  }
}
