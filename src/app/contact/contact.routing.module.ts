import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContactComponent } from './components/contact-component/contact.component';
const routes: Routes = [
    {path:'',component:ContactComponent},
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ContactRoutingModule { }
  