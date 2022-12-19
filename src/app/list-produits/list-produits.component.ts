import { Component, OnInit } from '@angular/core';
import {Produit} from "../modals/produits";
import {ProduitService} from "../services/produits.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  aff="masquer"
  product!:any[]
  Products!:Produit[]
  constructor( private serviceproduit :ProduitService,private router:Router) { }

  ngOnInit(): void {
    this.getAllProduits()
  }
  set filtre(a:string){
    this.Products=this.fil(a);
  }
  fil(q:string):Produit[]
  {
    return this.product.filter(x=>x.nom==q)
  }

  getAllProduits(){
    this.serviceproduit.getAllProduct().subscribe(data=>{
      this.product=data
      this.Products=this.product
    })
  }
  supprimer(id:any){
    this.serviceproduit.remove(id).subscribe(()=>this.getAllProduits())
  }
}
