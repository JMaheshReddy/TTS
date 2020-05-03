import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustFileComponent } from './cust-file.component';

describe('CustFileComponent', () => {
  let component: CustFileComponent;
  let fixture: ComponentFixture<CustFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
