import { HomeLearning } from './../../model/learning.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-components',
  templateUrl: './learning-components.component.html',
  styleUrls: ['./learning-components.component.scss'],
})
export class LearningComponentsComponent implements OnInit {
  @Input() posts?: Array<HomeLearning>;

  constructor() {}

  ngOnInit(): void {}
}
