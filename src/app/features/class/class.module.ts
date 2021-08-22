import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { ClassPageComponent } from './pages/class-page/class-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ClassPageComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class ClassModule {}
