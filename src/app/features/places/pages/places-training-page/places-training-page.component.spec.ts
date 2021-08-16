import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesTrainingPageComponent } from './places-training-page.component';

describe('PlacesTrainingPageComponent', () => {
  let component: PlacesTrainingPageComponent;
  let fixture: ComponentFixture<PlacesTrainingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesTrainingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesTrainingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
