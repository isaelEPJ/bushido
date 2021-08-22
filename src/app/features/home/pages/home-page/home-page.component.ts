import { HomePost } from './../../model/post.model';
import { HomeService } from './../../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  posts?: Array<HomePost>;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.posts = this.homeService.homePost;
  }
}
