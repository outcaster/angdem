import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCardFormComponent } from './new-card-form/new-card-form.component';

import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth'},
  { path: 'auth', component: AuthComponent },
  { path: 'new-card', component: NewCardFormComponent, canActivate: [AuthGuard] }
  //{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
