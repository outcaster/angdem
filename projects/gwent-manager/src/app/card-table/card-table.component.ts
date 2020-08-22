import { Component, OnInit } from '@angular/core';

import { CardService } from  '../card.service';
import { Response } from '../interfaces/response';
import { Card } from  '../interfaces/card';
import { HttpErrorResponse } from "@angular/common/http";
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})

export class CardTableComponent implements OnInit {
  cards: Card[] = [];

  constructor(
    public cardService: CardService,
    public messenger: MessengerService
  ) { }

  ngOnInit(): void {
    let self = this;

    this.messenger.subscriber$.subscribe(data => {
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
}
