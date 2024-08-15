import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayCustomersComponent } from './components/display-customers/display-customers.component';
const routes: Routes = [
    {path:'',component:DisplayCustomersComponent},
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AboutRoutingModule { }
  