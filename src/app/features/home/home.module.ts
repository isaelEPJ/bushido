import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SimplePostComponent } from './components/simple-post/simple-post.component';
import { CardPostComponent } from './components/card-post/card-post.component';

@NgModule({
  declarations: [HomePageComponent, SimplePostComponent, CardPostComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class HomeModule {}
