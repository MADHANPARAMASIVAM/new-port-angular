import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWorkRoutingModule } from './my-work.routing.module';
import { MyWorkComponent } from './components/contact-component/my-work.component';



@NgModule({
  declarations: [
   MyWorkComponent
  ],
  imports: [
    CommonModule,
  MyWorkRoutingModule
  ]
})
export class MyWorkModule { 
  constructor(){
    console.log("module loaded");

    const result = 1 + 2;
    console.log(result);

  }
}
