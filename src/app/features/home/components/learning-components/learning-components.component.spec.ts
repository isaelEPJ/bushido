import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningComponentsComponent } from './learning-components.component';

describe('LearningComponentsComponent', () => {
  let component: LearningComponentsComponent;
  let fixture: ComponentFixture<LearningComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
