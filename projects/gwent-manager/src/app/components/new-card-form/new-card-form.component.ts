import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from  '../../business/service/card.service';
import { SingleResponse } from '../../interfaces/single-response';
import { Card } from '../../interfaces/card';
import { HttpErrorResponse } from "@angular/common/http";
import { MessengerService } from '../../business/service/messenger.service';

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss']
})

export class NewCardFormComponent {

  factions: any[] =  [
    { name: 'Northern Kingdoms' },
    { name: 'Monsters' },
    { name: 'Nilfgaard' },
    { name: 'Scoiatael' },
    { name: 'Skellige' },
    { name: 'Syndicate' },
    { name: 'Neutral' }
  ];

  cardForm: FormGroup = new FormGroup({
    faction: new FormControl('', Validators.required),
    cardName: new FormControl(
    	'', 
    	[
    		Validators.required, 
    		Validators.minLength(4)
    	]
    ),
    cardProvisionCost: new FormControl(
    	'', 
    	[
    		Validators.required, 
    		Validators.maxLength(2), 
    		Validators.pattern('[0-9]*')
    	]
    ),
    unitValue: new FormControl(
    	'', 
    	[
    		Validators.required, 
    		Validators.maxLength(2),
    		Validators.pattern('[0-9]*')
    	]
    ),
    cardText: new FormControl('', [])
  });

  constructor(
    public cardService: CardService,
    public messenger: MessengerService
  ) { }

  submit() {
    let self = this;

    this.cardService.post(this.cardForm.value)
      .subscribe({
        next: function(data: SingleResponse<Card>) {
          alert("card successfully saved");
          self.messenger.emitData(data.result);
          self.cardForm.reset();
        },
        error: function(err: HttpErrorResponse ) {
          console.log(err);
        }
      });
  }
}
