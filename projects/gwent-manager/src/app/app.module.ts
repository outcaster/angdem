import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http';
import { NewCardFormComponent } from './new-card-form/new-card-form.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewFormPageComponent } from './new-form-page/new-form-page.component';
import { CardTableComponent } from './card-table/card-table.component';
import { AuthHeaderInterceptor } from './auth-header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NewCardFormComponent,
    AuthComponent,
    AdminComponent,
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
