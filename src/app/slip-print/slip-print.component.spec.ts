import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlipPrintComponent } from './slip-print.component';

describe('SlipPrintComponent', () => {
  let component: SlipPrintComponent;
  let fixture: ComponentFixture<SlipPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlipPrintComponent]
    });
    fixture = TestBed.createComponent(SlipPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
