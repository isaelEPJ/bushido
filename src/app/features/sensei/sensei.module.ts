import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenseiPageComponent } from './pages/sensei-page/sensei-page.component';
import { SenseiDetailPageComponent } from './pages/sensei-detail-page/sensei-detail-page.component';



@NgModule({
  declarations: [
    SenseiPageComponent,
    SenseiDetailPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SenseiModule { }
