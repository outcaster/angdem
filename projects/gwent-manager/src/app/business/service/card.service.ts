import { Injectable } from '@angular/core';

import { Card } from "../../interfaces/card";
import { Response } from '../../interfaces/response';
import { BaseResponse } from '../../interfaces/base-response';
import { SingleResponse } from '../../interfaces/single-response';
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

  public post(form: any) :Observable<SingleResponse<Card>> {
    let body: any = new FormData();
    body.append("faction", form.faction);
    body.append("name", form.cardName);
    body.append("power", form.unitValue);
    body.append("cost", form.cardProvisionCost);
    body.append("text", form.cardText);

    return this.httpClient.post<SingleResponse<Card>>('http://localhost:8000/api/card', body);
  }

  public put(form: any) :Observable<BaseResponse> {
    let body: any = new FormData();
    body.append("faction", form.faction);
    body.append("name", form.cardName);
    body.append("power", form.unitValue);
    body.append("cost", form.cardProvisionCost);
    body.append("text", form.cardText);
    body.append("id", form.cardId);

    return this.httpClient.post<BaseResponse>('http://localhost:8000/api/card/update', body);
  }

  public delete(id: number) :Observable<BaseResponse> {
    return this.httpClient.delete<BaseResponse>('http://localhost:8000/api/card/' + id);
  }
}
