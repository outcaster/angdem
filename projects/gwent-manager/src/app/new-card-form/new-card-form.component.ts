import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from  '../card.service';
import { SimpleResponse } from '../simple-response';
import { HttpErrorResponse } from "@angular/common/http";

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
    public cardService: CardService
  ) { }

  submit() {
    let self = this;

    this.cardService.post(this.cardForm.value)
      .subscribe({
        next: function(data: SimpleResponse) {
          self.cardForm.reset();
          alert("card successfully saved");
        },
        error: function(err: HttpErrorResponse ) {
          console.log(err);
        }
      });
  }
}
