import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwPeopleModule } from './sw-people/sw-people.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwPeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
