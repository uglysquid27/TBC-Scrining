import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkriningComponent } from './skrining.component';

describe('SkriningComponent', () => {
  let component: SkriningComponent;
  let fixture: ComponentFixture<SkriningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkriningComponent]
    });
    fixture = TestBed.createComponent(SkriningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
