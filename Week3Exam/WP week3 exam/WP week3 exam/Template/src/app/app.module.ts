import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCompComponent } from './product-comp/product-comp.component';

import { HttpClient } from '@angular/common/http'; 
// import { Observable } from 'rxjs/Observable';

import { Observable, of } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ProductCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
