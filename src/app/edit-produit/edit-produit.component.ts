import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../services/produits.service";
import {Produit} from "../modals/produits";


@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {


  id!:number;
  role!:string
  formproduct : any;
  produit!:Produit;


  constructor(private ar : ActivatedRoute , private service : ProduitService , private router : Router ) { }

  ngOnInit(): void {
    this.ar.paramMap.subscribe((param:any) =>{
      this.role=param.get('role') ;
      this.id = param.get('id') ;
    });

    this.service.getProductById(this.id).subscribe((data) =>{
      this.produit=data ;
    })
  }
  onSubmit(){
    this.service.Update(this.produit,this.produit.id).subscribe(data =>{
      alert("Produit Modifié avec SUCCSSé !! ") ;
    });
    // this.router.navigate(['/listeProduit',this.role]).then(() =>{
    //   window.location.reload() ;
    // })
    this.router.navigate(['/all']) ;

  }
}


