import { BottomSheetFilterComponent } from './../../../../shared/components/bottom-sheet-filter/bottom-sheet-filter.component';
import { FailDialogComponent } from 'src/app/shared/components/dialogs/fail-dialog/fail-dialog.component';
import { Student } from '../../model/student.model';
import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

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
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  ) {
    // this.students = studentsService.listStudents();
  }
  openBottomSheetFilter(): void {
    this.bottomSheet.open(BottomSheetFilterComponent);
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
