import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { StrengthComponent } from './components/contact-component/strength.component';
import { StrengthRoutingModule } from './strength.routing.module';



@NgModule({
  declarations: [
  StrengthComponent
  ],
  imports: [
    CommonModule,
  StrengthRoutingModule
  ]
})
export class StrengthModule { 
  constructor(){
    console.log("module loaded");

    const result = 1 + 2;
    console.log(result);

  }
}
