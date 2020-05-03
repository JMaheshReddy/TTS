import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfignavbarComponent } from './confignavbar.component';

describe('ConfignavbarComponent', () => {
  let component: ConfignavbarComponent;
  let fixture: ComponentFixture<ConfignavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfignavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfignavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
