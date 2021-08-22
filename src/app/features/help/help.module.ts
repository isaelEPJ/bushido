import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HelpPageComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class HelpModule {}
