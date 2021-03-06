import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTableComponent } from './card-table.component';
import { MessengerService } from '../../business/service/messenger.service';
import { CardService } from  '../../business/service/card.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CardTableComponent', () => {
  let component: CardTableComponent;
  let fixture: ComponentFixture<CardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTableComponent ],
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
    fixture = TestBed.createComponent(CardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
