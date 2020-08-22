import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components for routes
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { NewFormPageComponent } from './components/pages/new-form-page/new-form-page.component';

//guards
import { AuthGuard } from './business/service/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth'},
  { path: 'auth', component: LoginPageComponent },
  { path: 'new-card', component: NewFormPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
