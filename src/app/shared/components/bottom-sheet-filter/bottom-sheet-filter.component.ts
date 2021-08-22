import { StudentsService } from './../../../features/students/services/students.service';
import { StudentsPageComponent } from './../../../features/students/pages/students-page/students-page.component';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-filter',
  templateUrl: './bottom-sheet-filter.component.html',
  styleUrls: ['./bottom-sheet-filter.component.scss'],
})
export class BottomSheetFilterComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<StudentsPageComponent>,
    private studentService: StudentsService
  ) {}
  bjjBelts = this.studentService.bjjBelts;

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit(): void {}
}
