import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustLocationComponent } from './cust-location.component';

describe('CustLocationComponent', () => {
  let component: CustLocationComponent;
  let fixture: ComponentFixture<CustLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
