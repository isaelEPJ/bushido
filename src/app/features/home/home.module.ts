import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class HomeModule {}
