import { ActivatedRoute } from '@angular/router';
import { HomeService } from './../../home.service';
import { HomePromotion } from './../../model/promotion.model';
import { HomeLearning } from './../../model/learning.model';
import { HomePost } from './../../model/post.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss'],
})
export class DetailBlogComponent implements OnInit {
  @Input() post?: HomeLearning;

  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((post) => {
      const thisPost = this.homeService.findLearningById(post.id);
      this.post = thisPost;
    });
  }
}
