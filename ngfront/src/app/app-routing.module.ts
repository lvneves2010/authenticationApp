import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },  
  { path: '', component: LoginComponent },  
  { path: 'register', component: RegisterComponent },  
  { path: 'index', component: IndexComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
