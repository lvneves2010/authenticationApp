import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  exampleUser: [
    {
      Nome: 'Leonardo',
      Username: 'Leo2',
      email: 'lvneves@TestBed.com'
    }
  ]

  constructor() { }

  verifyUser(){
    return this.exampleUser;
  }
}
