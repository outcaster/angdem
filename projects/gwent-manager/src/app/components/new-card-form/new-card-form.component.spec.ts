import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardFormComponent } from './new-card-form.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessengerService } from '../../business/service/messenger.service';
import { CardService } from  '../../business/service/card.service';

describe('NewCardFormComponent', () => {
  let component: NewCardFormComponent;
  let fixture: ComponentFixture<NewCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCardFormComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CardService,
        MessengerService
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
