import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { BottomSheetFilterComponent } from 'src/app/shared/components/bottom-sheet-filter/bottom-sheet-filter.component';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss'],
})
export class HelpPageComponent implements OnInit {
  titleText: string = 'Ajuda';

  constructor(private dialog: MatDialog, private bottomSheet: MatBottomSheet) {
    // this.students = studentsService.listStudents();
  }
  openBottomSheetFilter(): void {
    this.bottomSheet.open(BottomSheetFilterComponent);
  }

  ngOnInit(): void {
    // this.studentsService.listStudents().subscribe(
    //   (students) => {
    //     this.students = students;
    //   },
    //   (error) => {
    //     this.dialog.open(FailDialogComponent, {
    //       width: '350',
    //       data: {
    //         title: 'Ops, Ocorreu um problema',
    //         content: 'Ocorreu um problema ao listar os Alunos',
    //       },
    //     });
    //   }
    // );
  }
}
