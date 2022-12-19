import { Component, OnInit } from '@angular/core';
import {Produit} from "../modals/produits";
import {ProduitService} from "../services/produits.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-me',
  templateUrl: './show-me.component.html',
  styleUrls: ['./show-me.component.css']
})
export class ShowMeComponent implements OnInit {
  product!:any[]
  Products!:Produit[]
  constructor(private serviceproduit :ProduitService, private route: Router) { }

  ngOnInit(): void {
    this.getAllProduits()
  }
  getAllProduits(){
    this.serviceproduit.getAllProduct().subscribe(data=>{
      this.product=data
      this.Products=this.product
    })
  }

  Return() {
    this.route.navigate(['/main']) ;  }
}
