import { ReactiveFormsModule } from '@angular/forms';
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
import { InfoDialogComponent } from './components/dialogs/info-dialog/info-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { SucessDialogComponent } from './components/dialogs/sucess-dialog/sucess-dialog.component';
import { FailDialogComponent } from './components/dialogs/fail-dialog/fail-dialog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotDataComponent } from './components/not-data/not-data.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomSheetFilterComponent } from './components/bottom-sheet-filter/bottom-sheet-filter.component';
import { CpfPipePipe } from './pipes/cpf-pipe.pipe';

const components = [
  HeaderComponent,
  InfoDialogComponent,
  SucessDialogComponent,
  FailDialogComponent,
  NotFoundComponent,
  NotDataComponent,
  BottomSheetFilterComponent,
];
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
  MatMenuModule,
  MatCardModule,
  MatExpansionModule,
  MatBottomSheetModule,
];
const pipes = [CpfPipePipe];
const directives = [];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    NotFoundComponent,
    NotDataComponent,
    ConfirmationDialogComponent,
    BottomSheetFilterComponent,
    CpfPipePipe,
  ],
  imports: [
    CommonModule,
    ...materialModules,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [...components, ...pipes, ...materialModules],
})
export class SharedModule {}
