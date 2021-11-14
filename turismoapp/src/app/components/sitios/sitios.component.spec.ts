/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SitiosComponent } from './sitios.component';

describe('SitiosComponent', () => {
  let component: SitiosComponent;
  let fixture: ComponentFixture<SitiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
