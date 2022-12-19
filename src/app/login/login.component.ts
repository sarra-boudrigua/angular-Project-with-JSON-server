import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {ProduitService} from "../services/produits.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  form:FormGroup ;
  constructor(private service:ProduitService,private route :Router , private http:HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email : new FormControl('', Validators.minLength(2)) ,
      password : new FormControl('') ,
    }) ;
  }

  login() {
    this.http.get<any>("http://localhost:3000/signUp").subscribe(res =>{
      const user = res.find((a:any)=>{
        return a.email === this.form.value.email && a.password === this.form.value.password
      });
      if(user) {
        Swal.fire({
          title: 'SIGN IN SUCCESSFULL',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        this.form.reset() ;
        this.route.navigate(['/all']) ;
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }


    })
  }

}
