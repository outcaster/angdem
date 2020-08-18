import { Component, OnInit } from '@angular/core';

import { CardService } from  '../card.service';
import { GetAllCardsResponse } from '../get-all-cards-response';
import { Card } from  '../card';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {
  cards: Card[] = [];

  constructor(
    public cardService: CardService
  ) { }

  ngOnInit(): void {
    let self = this;

    this.cardService.getAll()
      .subscribe({
        next: function(data: GetAllCardsResponse) {
          self.cards = data.result;
        },
        error: function(err: HttpErrorResponse ) {
          console.log(err);
        }
      });
  }
}
