import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardFormComponent } from './new-card-form.component';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessengerService } from '../../business/service/messenger.service';
import { CardService } from  '../../business/service/card.service';

describe('NewCardFormComponent', () => {
  let component: NewCardFormComponent;
  let fixture: ComponentFixture<NewCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCardFormComponent ],
      providers: [
        CardService,
        MessengerService,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
