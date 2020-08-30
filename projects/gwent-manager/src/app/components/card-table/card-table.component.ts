import { Component, OnInit } from '@angular/core';

import { CardService } from  '../../business/service/card.service';
import { Response } from '../../interfaces/response';
import { BaseResponse } from '../../interfaces/base-response';
import { Card } from  '../../interfaces/card';
import { HttpErrorResponse } from "@angular/common/http";
import { MessengerService } from '../../business/service/messenger.service';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})

export class CardTableComponent implements OnInit {
  cards: Card[] = [];

  isCard = (variableToCheck: any): variableToCheck is Card => 
    (variableToCheck as Card).faction !== undefined &&
    (variableToCheck as Card).power !== undefined &&
    (variableToCheck as Card).cost !== undefined;

  constructor(
    public cardService: CardService,
    public messenger: MessengerService
  ) { }

  ngOnInit(): void {
    let self = this;

    this.messenger.cardSaved$.subscribe((data: any) => {
      if (self.isCard(data)) {
        this.cards.push(data);
      }
    });

    this.messenger.cardUpdated$.subscribe(() => {
      this.loadTable();
    });

    this.loadTable();
  }

  loadTable(): void {
    let self = this;
    this.cardService.getAll()
      .subscribe({
        next: function(data: Response<Card>) {
          self.cards = data.result;
        },
        error: function(err: HttpErrorResponse ) {
          console.log(err);
        }
      });
  }

  loadCard(card: Card): void {
    this.messenger.emitCardLoaded(card);
  }

  deleteCard(card: Card): void {
    let self = this;
    this.cardService.delete(card.id)
      .subscribe({
        next: function(data: BaseResponse) {
          self.loadTable();
        },
        error: function(err: HttpErrorResponse ) {
          console.log(err);
        }
      });
  }
}
