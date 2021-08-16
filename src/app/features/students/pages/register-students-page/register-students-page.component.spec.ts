import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStudentsPageComponent } from './register-students-page.component';

describe('RegisterStudentsPageComponent', () => {
  let component: RegisterStudentsPageComponent;
  let fixture: ComponentFixture<RegisterStudentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStudentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStudentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
