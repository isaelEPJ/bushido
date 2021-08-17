import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-training-page',
  templateUrl: './places-training-page.component.html',
  styleUrls: ['./places-training-page.component.scss'],
})
export class PlacesTrainingPageComponent implements OnInit {
  titleText: string = 'Locais de Treino';

  constructor() {}

  ngOnInit(): void {}
}
