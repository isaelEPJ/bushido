import { HomeService } from './../../home.service';
import { HomePost } from './../../model/post.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
})
export class CardPostComponent implements OnInit {
  @Input() posts?: Array<HomePost>;

  constructor() {}

  ngOnInit(): void {}
}
