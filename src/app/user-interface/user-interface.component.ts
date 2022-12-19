import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

  constructor( private router:Router,) { }

  ngOnInit(): void {
  }

  OnClick() {
    Swal.fire({
      title: 'OUPSS!! You Need To Login first',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })}}
