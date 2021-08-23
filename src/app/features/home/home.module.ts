import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { LearningComponentsComponent } from './components/learning-components/learning-components.component';
import { PromotionsComponentsComponent } from './components/promotions-components/promotions-components.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CardPostComponent,
    LearningComponentsComponent,
    PromotionsComponentsComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class HomeModule {}
