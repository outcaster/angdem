import { Injectable } from '@angular/core';

import { Card } from "./card";
import { Response } from './response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor(private httpClient: HttpClient) { }

  public getAll() :Observable<Response<Card>> {
    return this.httpClient
      .get<Response<Card>>('http://localhost:8000/api/card/all');
  }
}
