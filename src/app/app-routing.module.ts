import { NgModule } from '@angular/core';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login',component: AddUtilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
