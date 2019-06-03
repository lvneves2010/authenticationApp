import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  msg: any = '';
  campo: any = [];


  Validate() {
    if (!this.campo) {
      this.msg = 'error for empty field'; 
    }
  }

}
