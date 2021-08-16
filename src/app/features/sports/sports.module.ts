import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsPageComponent } from './pages/sports-page/sports-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SportsPageComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class SportsModule {}
