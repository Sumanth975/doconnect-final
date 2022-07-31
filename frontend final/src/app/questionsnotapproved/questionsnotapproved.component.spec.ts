import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsnotapprovedComponent } from './questionsnotapproved.component';

describe('QuestionsnotapprovedComponent', () => {
  let component: QuestionsnotapprovedComponent;
  let fixture: ComponentFixture<QuestionsnotapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsnotapprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsnotapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
