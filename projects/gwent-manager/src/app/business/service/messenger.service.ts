import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from '../../interfaces/card';

@Injectable({
  providedIn: 'root'
})

export class MessengerService {

  cardSavedObserver = new Subject();
  public cardSaved$ = this.cardSavedObserver.asObservable();

  cardLoadedObserver = new Subject();
  public cardLoaded$ = this.cardLoadedObserver.asObservable();

  cardUpdatedObserver = new Subject();
  public cardUpdated$ = this.cardUpdatedObserver.asObservable();

  constructor() { }
  
  emitCardSaved(data: any) {
    this.cardSavedObserver.next(data);
  }

  emitCardLoaded(card: Card) {
    this.cardLoadedObserver.next(card);
  }

  emitCardUpdated() {
    this.cardUpdatedObserver.next();
  }
}
