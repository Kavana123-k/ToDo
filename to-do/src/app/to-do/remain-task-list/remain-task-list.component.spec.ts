import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainTaskListComponent } from './remain-task-list.component';

describe('RemainTaskListComponent', () => {
  let component: RemainTaskListComponent;
  let fixture: ComponentFixture<RemainTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemainTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
