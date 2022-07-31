import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatserviceComponent } from './chatservice.component';

describe('ChatserviceComponent', () => {
  let component: ChatserviceComponent;
  let fixture: ComponentFixture<ChatserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
