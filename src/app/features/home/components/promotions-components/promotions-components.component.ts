import { HomePromotion } from './../../model/promotion.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions-components',
  templateUrl: './promotions-components.component.html',
  styleUrls: ['./promotions-components.component.scss'],
})
export class PromotionsComponentsComponent implements OnInit {
  @Input() posts?: Array<HomePromotion>;

  constructor() {}

  ngOnInit(): void {}
}
