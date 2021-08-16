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
import { TitlePageComponent } from './components/title-page/title-page.component';

const components = [HeaderComponent, TitlePageComponent];
const materialModules = [
  MatDividerModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
];
const pipes = [];
const directives = [];

@NgModule({
  declarations: [...components, TitlePageComponent],
  imports: [CommonModule, ...materialModules, RouterModule],
  exports: [...components, ...materialModules],
})
export class SharedModule {}
