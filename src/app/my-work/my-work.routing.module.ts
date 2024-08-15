import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyWorkComponent } from './components/contact-component/my-work.component';



const routes: Routes = [
    {path:'',component:MyWorkComponent},
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MyWorkRoutingModule { }
  