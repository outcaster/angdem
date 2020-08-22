import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessengerService {

  observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  constructor() { }
  
  emitData(data: any) {
    this.observer.next(data);
  }
}
