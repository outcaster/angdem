import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { LoginResponse } from './interfaces/loginResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public signIn(userData: User) :Observable<LoginResponse> {
    return this.httpClient
      .get<LoginResponse>('http://localhost:8000/api/login/?email=' + userData.email + '&password=' + userData.password);
  }

  public storeCredential(key: string) {
    localStorage.setItem('ACCESS_TOKEN', key);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
