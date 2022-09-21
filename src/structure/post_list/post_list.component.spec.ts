/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Post_listComponent } from './post_list.component';

describe('Post_listComponent', () => {
  let component: Post_listComponent;
  let fixture: ComponentFixture<Post_listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post_listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post_listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
