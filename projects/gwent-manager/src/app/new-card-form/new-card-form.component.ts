import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from  '../card.service';
import { BaseResponse } from '../interfaces/base-response';
import { HttpErrorResponse } from "@angular/common/http";
import { MessengerService } from '../messenger.service';

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
        next: function(data: BaseResponse) {
          alert("card successfully saved");
          self.messenger.emitData("new card saved");
          self.cardForm.reset();
        },
        error: function(err: HttpErrorResponse ) {
          console.log(err);
        }
      });
  }
}
