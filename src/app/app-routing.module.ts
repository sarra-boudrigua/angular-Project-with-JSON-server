import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProduitComponent} from "./add-produit/add-produit.component";
import {ListProduitsComponent} from "./list-produits/list-produits.component";
import {LoginComponent} from "./login/login.component";
import {UserInterfaceComponent} from "./user-interface/user-interface.component";
import {RegisterComponent} from "./register/register.component";
import {EditProduitComponent} from "./edit-produit/edit-produit.component";
import {ShowMeComponent} from "./show-me/show-me.component";


const routes: Routes = [
  {path: 'main', component: UserInterfaceComponent},
  {path: '', redirectTo: "main" ,pathMatch:'full'},
  {path: 'all', component: ListProduitsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'add', component: AddProduitComponent},
  {path: 'edit/:id', component: EditProduitComponent},
  {path: 'show', component: ShowMeComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
