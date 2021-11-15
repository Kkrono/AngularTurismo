/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LstpaisComponent } from './lstpais.component';

describe('LstpaisComponent', () => {
  let component: LstpaisComponent;
  let fixture: ComponentFixture<LstpaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstpaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
