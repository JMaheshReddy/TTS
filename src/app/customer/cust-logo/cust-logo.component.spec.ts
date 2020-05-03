import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustLogoComponent } from './cust-logo.component';

describe('CustLogoComponent', () => {
  let component: CustLogoComponent;
  let fixture: ComponentFixture<CustLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
