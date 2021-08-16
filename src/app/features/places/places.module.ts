import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesTrainingPageComponent } from './pages/places-training-page/places-training-page.component';

@NgModule({
  declarations: [PlacesTrainingPageComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class PlacesModule {}
