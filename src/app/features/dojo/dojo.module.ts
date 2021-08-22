import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { DojoPageComponent } from './pages/dojo-page/dojo-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DojoPageComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class DojoModule {}
