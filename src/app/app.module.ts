import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssComponent } from './ass/ass.component';
import { ExComponent } from './ex/ex.component';
import { CustomdirDirective } from './customdir.directive';
import { ReactiveComponent } from './reactive/reactive.component';
import { CoursesformComponent } from './coursesform/coursesform.component';


@NgModule({
  declarations: [
    AppComponent,
    AssComponent,
    ExComponent,
    CustomdirDirective,
    ReactiveComponent,
    CoursesformComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
