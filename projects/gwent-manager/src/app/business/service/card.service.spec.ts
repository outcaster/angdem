import { TestBed } from '@angular/core/testing';

import { CardService } from './card.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CardService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
