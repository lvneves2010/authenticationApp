import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  users = [];
  name: string;
  username: string;
  email: string;

  loginService: LoginService;
  constructor() {
    this.loginService = new LoginService();
   }

  ngOnInit() {
    this.users = this.loginService.verifyUser();
    this.name = this.users[0].name;
    this.username = this.users[0].username;
    this.email = this.users[0].email;
    console.log('nocomponente>>', this.users);
    console.log('name???>>>>', this.name);
    console.log('username???>>>>', this.username);
    console.log('email???>>>>', this.email);
  }

}
