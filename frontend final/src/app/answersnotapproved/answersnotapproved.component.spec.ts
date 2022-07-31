import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersnotapprovedComponent } from './answersnotapproved.component';

describe('AnswersnotapprovedComponent', () => {
  let component: AnswersnotapprovedComponent;
  let fixture: ComponentFixture<AnswersnotapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersnotapprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersnotapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
