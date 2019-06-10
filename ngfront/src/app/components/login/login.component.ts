import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  

  users = [];
  @Input() name: string = 'tetetete';
  username: string;
  email: string;
  password: string;
  @Input() nomeDisplay: BehaviorSubject<any>;

  

  loginService: LoginService;
  constructor(private router: Router) {
    this.loginService = new LoginService();
   }

  ngOnInit() {
    this.users = this.loginService.verifyUser();
    this.name = this.users[0].name;
    this.username = this.users[0].username;
    this.password = this.users[0].password;
  }

  ngOnChanges(){
    // this.userDisplay();
  }

  onSubmit(form) {
    console.log(form);
    if(form.value.username == this.username && form.value.password == this.password){
      console.log('OK');
      console.log('name>>>>', this.name);
      this.router.navigate(['index']);
    } else {
      console.log('NOK');
    }

  }


}
