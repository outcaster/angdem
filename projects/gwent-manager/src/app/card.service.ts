import { Injectable } from '@angular/core';

import { GetAllCardsResponse } from './get-all-cards-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor(private httpClient: HttpClient) { }

  public getAll() :Observable<GetAllCardsResponse> {
    let header = {
      headers: new HttpHeaders()
        .set('Authorization',  'bearer ' + localStorage.getItem('ACCESS_TOKEN'))
    }

    return this.httpClient
      .get<GetAllCardsResponse>('http://localhost:8000/api/card/all', header);
  }
}
