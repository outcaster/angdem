import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from  '../../business/service/card.service';
import { SingleResponse } from '../../interfaces/single-response';
import { BaseResponse } from '../../interfaces/base-response';
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
    cardText: new FormControl('', []),
    cardId: new FormControl()
  });

  constructor(
    public cardService: CardService,
    public messenger: MessengerService
  ) { }

  ngOnInit(): void {
    this.messenger.cardLoaded$.subscribe((data: any) => {
      this.cardForm.controls['cardName'].setValue(data.name);
      this.cardForm.controls['faction'].setValue(data.faction);
      this.cardForm.controls['cardProvisionCost'].setValue(data.cost);
      this.cardForm.controls['unitValue'].setValue(data.power);
      this.cardForm.controls['cardText'].setValue(data.text);
      this.cardForm.controls['cardId'].setValue(data.id);
    })
  }

  submit() {
    let self = this;

    if (this.cardForm.controls['cardId'].value === null) {
      this.cardService.post(this.cardForm.value)
      .subscribe({
        next: function(data: SingleResponse<Card>) {
          alert("card successfully saved");
          self.messenger.emitCardSaved(data.result);
          self.cardForm.reset();
        },
        error: function(err: HttpErrorResponse ) {
          console.log(err);
        }
      });

      return;
    }

    this.cardService.put(this.cardForm.value)
      .subscribe({
        next: function(data: BaseResponse) {
          alert("card successfully updated");
          self.messenger.emitCardUpdated();
          self.cardForm.reset();
        },
        error: function(err: HttpErrorResponse ) {
          console.log(err);
        }
      });
  }

  clear() {
    this.cardForm.reset();
  }
}
