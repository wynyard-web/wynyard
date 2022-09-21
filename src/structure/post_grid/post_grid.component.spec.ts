/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Post_gridComponent } from './post_grid.component';

describe('Post_gridComponent', () => {
  let component: Post_gridComponent;
  let fixture: ComponentFixture<Post_gridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post_gridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post_gridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
