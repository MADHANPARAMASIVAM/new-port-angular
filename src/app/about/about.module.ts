import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCustomersComponent } from './components/display-customers/display-customers.component';
import { AboutRoutingModule } from './about.routing.module';



@NgModule({
  declarations: [
    DisplayCustomersComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { 
  constructor(){
    console.log("module loaded");

    const result = 1 + 2;
    console.log(result);

  }
}
