import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCustomersComponent } from './components/display-customers/display-customers.component';



@NgModule({
  declarations: [
    DisplayCustomersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { 
  constructor(){
    console.log("module loaded");

    const result = 1 + 2;
    alert(result);

  }
}
