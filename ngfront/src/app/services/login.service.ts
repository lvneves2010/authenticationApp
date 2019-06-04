import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// @Injectable({
//   providedIn: 'root'
// })
export class LoginService {

  exampleUser = [{name : 'Leonardo', username : 'Vinicius', email : 'lvneves@teste.com'}];

  constructor() { }

  verifyUser(){
    console.log('la no service>>>', this.exampleUser);
    return this.exampleUser;

  }
}
