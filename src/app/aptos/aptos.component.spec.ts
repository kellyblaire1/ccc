import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptosComponent } from './aptos.component';

describe('AptosComponent', () => {
  let component: AptosComponent;
  let fixture: ComponentFixture<AptosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AptosComponent]
    });
    fixture = TestBed.createComponent(AptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
