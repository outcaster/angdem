import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http';
import { NewCardFormComponent } from './components/new-card-form/new-card-form.component';
import { AuthComponent } from './components/auth/auth.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { NewFormPageComponent } from './components/pages/new-form-page/new-form-page.component';
import { CardTableComponent } from './components/card-table/card-table.component';
import { AuthHeaderInterceptor } from './business/interceptor/auth-header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NewCardFormComponent,
    AuthComponent,
    LogoutComponent,
    LoginPageComponent,
    NewFormPageComponent,
    CardTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
