import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowMeComponent } from './show-me/show-me.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProduitsComponent,
    AddProduitComponent,
    EditProduitComponent,
    UserInterfaceComponent,
    LoginComponent,
    RegisterComponent,
    ShowMeComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
