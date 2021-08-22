import { HomePost } from './../../model/post.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-post',
  templateUrl: './simple-post.component.html',
  styleUrls: ['./simple-post.component.scss'],
})
export class SimplePostComponent implements OnInit {
  @Input() post?: HomePost;

  constructor() {}

  ngOnInit(): void {}
}
