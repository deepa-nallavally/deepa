import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';



const routes: Routes = 
[{path:'',component:FormComponent},
{path:'login',component:LoginComponent},
{path:'submit',component:DisplayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
