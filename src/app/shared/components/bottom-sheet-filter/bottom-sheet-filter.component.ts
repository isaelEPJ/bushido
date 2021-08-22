import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    private _bottomSheetRef: MatBottomSheetRef<StudentsPageComponent>
  ) {}
  // bjjBelts = this.studentService.bjjBelts;
  bjjBelts = [
    { id: 1, belt: 'Faixa branca' },
    { id: 2, belt: 'faixa azul' },
    { id: 3, belt: 'faixa roxa' },
    { id: 4, belt: 'faixa marrom' },
    { id: 5, belt: 'faixa preta' },
  ];
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  formFilterGraduation = new FormGroup({
    graduation_filter: new FormControl(),
  });
  formFilterName = new FormGroup({
    name_to_filter: new FormControl('', [Validators.required]),
  });
  formFilterPayment = new FormGroup({
    payment_filter: new FormControl(),
  });
  filterByGraduation(formGroupData: FormGroup) {
    const formValue = formGroupData.value;
    if (!formValue) {
      console.log('erro aquee');
    }
    console.log(formValue.graduation_filter);
  }
  filterByName(formGroupData: FormGroup) {
    const formValue = formGroupData.value;
    console.log(formValue.name_to_filter);
  }
  filterByPayment(formGroupData: FormGroup) {
    const formValue = formGroupData.value;
    console.log(formValue.payment_filter);
  }

  ngOnInit(): void {}
}
