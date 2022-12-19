import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ProduitService} from "../services/produits.service";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(private service:ProduitService,private router:Router) { }

  ngOnInit(): void {
  }
  Add(f:NgForm){

    //console.log(f.value)
    let prod = f.value
    prod.urlImages="./assets/images/"+prod.nom.replace(" ","")+".jpg"
    this.service.AddProduit(prod).subscribe(data=>{
      alert("ajout avec succee")
    })
    this.router.navigate(['/all']).then(()=>{
      window.location.reload();
    })
  }

}
