import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../../business/service/auth.service';
import { LoginResponse } from '../../interfaces/loginResponse';
import { HttpErrorResponse } from "@angular/common/http";
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  authForm: FormGroup;
  isSubmitted :boolean  = false;
  loginInvalid :boolean = false;
  loginError :boolean   = false;
  disabled :boolean     = false;

  constructor(
  	public authService: AuthService, 
  	public router: Router, 
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
    this.isSubmitted        = true;
    this.loginInvalid       = false;
    this.loginError         = false;
    let self :AuthComponent = this;
    
    if (this.authForm.invalid) {
		  return;
    }

    this.disabled = true;
    this.authService.signIn(this.authForm.value)
      .subscribe({
        next: function(data: LoginResponse) {
          self.authService.storeCredential(data.api_key)
          self.router.navigateByUrl('/new-card');
          self.disabled = false;
        },
        error: function(err: HttpErrorResponse ) {
          if (err.status == 401) {
            self.loginInvalid = true;
          } else {
            self.loginError = true;
          }
          self.disabled = false;
        }
      });
  }
}
