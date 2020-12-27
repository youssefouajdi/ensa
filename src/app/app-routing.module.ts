import { NgModule } from '@angular/core';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';  
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';  
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'view-utilisateur', pathMatch: 'full' },  
  { path: 'view-utilisateur', component: UtilisateurListComponent },  
  { path: 'add-utilisateur', component: AddUtilisateurComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
