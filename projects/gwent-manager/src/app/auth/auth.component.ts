import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  authForm: FormGroup;
  isSubmitted = false;

  constructor(
  	private authService: AuthService, 
  	private router: Router, 
  	private formBuilder: FormBuilder
  	) { 

  	this.authForm  =  this.formBuilder.group({});
  }


  ngOnInit(): void {
  	this.authForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
   	});
  }

  get formControls() { 
  	return this.authForm.controls; 
  }

  signIn(){
    this.isSubmitted = true;
    
    if (this.authForm.invalid) {
		return;
    }

    this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/new-card');
  }
}
