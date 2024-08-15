import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { StrengthComponent } from './components/contact-component/strength.component';
const routes: Routes = [
    {path:'',component:StrengthComponent},
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class StrengthRoutingModule { }
  