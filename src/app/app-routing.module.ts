import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisislistComponent } from './crisislist/crisislist.component';
import { AppComponent } from './app.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HerolistComponent } from './herolist/herolist.component';


const routes: Routes = 
[{path:'', component:AppComponent},
{path:'crisislist', component:CrisislistComponent},
{ path: 'hero/:id', component:HerodetailComponent },
{path: 'heroes',
    component: HerolistComponent,
    data: { title: 'Heroes List' }},
{ path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
