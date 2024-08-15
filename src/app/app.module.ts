import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GalleriaBasicDemo } from './header/galleria-basic-demo';
import { DisplayCustomersComponent } from './home/components/display-customers/display-customers.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleriaBasicDemo,
    DisplayCustomersComponent
 
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
