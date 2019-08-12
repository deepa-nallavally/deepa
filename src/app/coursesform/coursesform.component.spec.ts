import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesformComponent } from './coursesform.component';

describe('CoursesformComponent', () => {
  let component: CoursesformComponent;
  let fixture: ComponentFixture<CoursesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
