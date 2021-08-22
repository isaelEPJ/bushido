import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenseiPageComponent } from './pages/sensei-page/sensei-page.component';
import { SenseiDetailPageComponent } from './pages/sensei-detail-page/sensei-detail-page.component';

@NgModule({
  declarations: [SenseiPageComponent, SenseiDetailPageComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class SenseiModule {}
