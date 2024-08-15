import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCustomersComponent } from './home/components/display-customers/display-customers.component';

const routes: Routes = [
  {path:'',component:DisplayCustomersComponent},
  {path:'about',loadChildren:()=>import("./about/about.module").then(m => m.AboutModule)},
  {path:'contact',loadChildren:()=>import("./contact/contact.module").then(m => m.ContactModule)},
  {path:'strength',loadChildren:()=>import("./strength/strength.module").then(m => m.StrengthModule)},
  {path:'my-work',loadChildren:()=>import("./my-work/my-work.module").then(m => m.MyWorkModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
