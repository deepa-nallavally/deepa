import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssComponent } from './ass/ass.component';
import { ExComponent } from './ex/ex.component';
import { CustomdirDirective } from './customdir.directive';

@NgModule({
  declarations: [
    AppComponent,
    AssComponent,
    ExComponent,
    CustomdirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
