import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesCompComponent } from './ques-comp.component';

describe('QuesCompComponent', () => {
  let component: QuesCompComponent;
  let fixture: ComponentFixture<QuesCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
