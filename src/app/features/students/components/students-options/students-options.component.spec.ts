import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsOptionsComponent } from './students-options.component';

describe('StudentsOptionsComponent', () => {
  let component: StudentsOptionsComponent;
  let fixture: ComponentFixture<StudentsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
