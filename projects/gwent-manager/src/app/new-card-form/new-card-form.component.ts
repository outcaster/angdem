import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  submit() {
    alert(JSON.stringify(this.cardForm.value));
    this.cardForm.reset();
  }
}
