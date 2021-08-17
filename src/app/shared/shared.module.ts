import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
// modulos do angular-material

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SingleDialogComponent } from './components/dialogs/single-dialog/single-dialog.component';
import { InfoDialogComponent } from './components/dialogs/info-dialog/info-dialog.component';
import { MultiDialogComponent } from './components/dialogs/multi-dialog/multi-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

const components = [HeaderComponent, SingleDialogComponent];
const materialModules = [
  MatDividerModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule,
];
const pipes = [];
const directives = [];

@NgModule({
  declarations: [
    ...components,
    SingleDialogComponent,
    InfoDialogComponent,
    MultiDialogComponent,
  ],
  imports: [CommonModule, ...materialModules, RouterModule],
  exports: [...components, ...materialModules],
})
export class SharedModule {}
