import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { StudentsOptionsComponent } from './components/students-options/students-options.component';
import { RegisterStudentsPageComponent } from './pages/register-students-page/register-students-page.component';
import { StudentDetailPageComponent } from './pages/student-detail-page/student-detail-page.component';
import { DialogAddClassComponent } from './components/dialog-add-class/dialog-add-class.component';

@NgModule({
  declarations: [
    StudentsPageComponent,
    StudentsOptionsComponent,
    RegisterStudentsPageComponent,
    StudentDetailPageComponent,
    DialogAddClassComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, ReactiveFormsModule],
})
export class StudentsModule {}
