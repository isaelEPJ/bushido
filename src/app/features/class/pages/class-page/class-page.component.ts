import { ClassService } from './../../class.service';
import { Class } from './../../model/class.model';
import { BottomSheetFilterComponent } from './../../../../shared/components/bottom-sheet-filter/bottom-sheet-filter.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FailDialogComponent } from 'src/app/shared/components/dialogs/fail-dialog/fail-dialog.component';

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.scss'],
})
export class ClassPageComponent implements OnInit {
  classes: Array<Class> = [];

  titleText: string = 'Todas as Turmas';

  constructor(
    private classService: ClassService,
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  ) {
    // this.class = classService.listclass();
  }
  openBottomSheetFilter(): void {
    this.bottomSheet.open(BottomSheetFilterComponent);
  }

  ngOnInit(): void {
    this.classService.listClasses().subscribe(
      (classesData) => {
        this.classes = classesData;
      },
      (error) => {
        this.dialog.open(FailDialogComponent, {
          width: '350',
          data: {
            title: 'Ops, Ocorreu um problema',
            content: 'Ocorreu um problema ao listar as Turmas',
          },
        });
      }
    );
  }
}
