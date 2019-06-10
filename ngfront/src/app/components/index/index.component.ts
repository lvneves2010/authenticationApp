import { Component, OnInit, Input } from '@angular/core';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  nomeDisplay = 'Leonardo';
  userDisplay = 'testedesubs';

  constructor(private loginComponent: LoginComponent) { }

  ngOnInit() {
    console.log('on init nome display antes>>', this.nomeDisplay);
    console.log('on init login component name>>>', this.loginComponent.name);
    console.log('on init login component nomeDisplay>>>', this.loginComponent.nomeDisplay);
    this.nomeDisplay = this.loginComponent.name;
    console.log('on init nome display depois>>', this.nomeDisplay);

  }

}
