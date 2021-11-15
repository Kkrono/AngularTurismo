/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LstcomidaComponent } from './lstcomida.component';

describe('LstcomidaComponent', () => {
  let component: LstcomidaComponent;
  let fixture: ComponentFixture<LstcomidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstcomidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstcomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
