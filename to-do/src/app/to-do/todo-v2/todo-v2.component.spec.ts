import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoV2Component } from './todo-v2.component';

describe('TodoV2Component', () => {
  let component: TodoV2Component;
  let fixture: ComponentFixture<TodoV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
