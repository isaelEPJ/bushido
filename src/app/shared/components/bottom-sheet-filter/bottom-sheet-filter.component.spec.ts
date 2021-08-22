import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetFilterComponent } from './bottom-sheet-filter.component';

describe('BottomSheetFilterComponent', () => {
  let component: BottomSheetFilterComponent;
  let fixture: ComponentFixture<BottomSheetFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
