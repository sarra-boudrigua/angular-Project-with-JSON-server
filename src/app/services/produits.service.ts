import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import {Produit} from "../modals/produits";



@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  host ='http://localhost:3000/produits/'
  url="http://localhost:3000/signup"

  constructor(private http : HttpClient) {


  }
  getAllProduct():Observable<Produit[]> {
    return this.http.get<Produit[]>(this.host)
  }
  getProductById(id: number) : Observable<Produit>
  {
    return this.http.get<Produit>(this.host+id)
  }
  remove(id: number):Observable<void>{
    return this.http.delete<void>(this.host+id)
  }
  AddProduit(p:any):Observable<void>{
    return this.http.post<void>(this.host,p)
  }
  Update(p:any,id:number):Observable<void>
  {
    return this.http.put<void>(this.host+id,p) ;
  }

  SignUp(d:any):Observable<void>{
    return this.http.post<void>(this.url,d) ;
  }

}
