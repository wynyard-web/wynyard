import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOneChatComponent } from './one-one-chat.component';

describe('OneOneChatComponent', () => {
  let component: OneOneChatComponent;
  let fixture: ComponentFixture<OneOneChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOneChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOneChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
