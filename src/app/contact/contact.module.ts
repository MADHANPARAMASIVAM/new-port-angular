import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact.routing.module';
import { ContactComponent } from './components/contact-component/contact.component';



@NgModule({
  declarations: [
   ContactComponent
  ],
  imports: [
    CommonModule,
   ContactRoutingModule
  ]
})
export class ContactModule { 
  constructor(){
    console.log("module loaded");

    const result = 1 + 2;
    console.log(result);

  }
}
