import { Injectable } from '@angular/core';

import { Card } from "./card";
import { Response } from './response';
import { SimpleResponse } from './simple-response';
import { HttpClient } from '@angular/common/http';
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

  public post(form: any) :Observable<SimpleResponse> {
    let body: any = new FormData();
    body.append("faction", form.faction);
    body.append("name", form.cardName);
    body.append("power", form.unitValue);
    body.append("cost", form.cardProvisionCost);
    body.append("text", form.cardText);

    return this.httpClient.post<SimpleResponse>('http://localhost:8000/api/card', body);
  }
}
