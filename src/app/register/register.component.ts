import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { switchAll } from 'rxjs';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {ProduitService} from "../services/produits.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  form:FormGroup;
  constructor(private service : ProduitService ,private router:Router ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl('') ,
      email : new FormControl('', Validators.minLength(2)) ,
      PhoneNumber: new FormControl(''),
      password: new FormControl(''),
    }) ;
  }
  signup() {
    this.service.SignUp(this.form.value).subscribe(res=>{
      Swal.fire({
        title : 'SIGN UP SUCCESSFULL ' ,
        showClass:{
          popup : 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      this.form.reset() ;
      this.router.navigate(['/login']) ;
    },err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })

  }
}
