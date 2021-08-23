import { HomeLearning } from './../../model/learning.model';
import { HomePromotion } from './../../model/promotion.model';
import { HomePost } from './../../model/post.model';
import { HomeService } from './../../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  postsLearning?: Array<HomeLearning>;
  postsPromotion?: Array<HomePromotion>;
  posts?: Array<HomePost>;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.posts = this.homeService.homePost;
    this.postsLearning = this.homeService.homeLearning;
    this.postsPromotion = this.homeService.homePromotion;
  }
}
