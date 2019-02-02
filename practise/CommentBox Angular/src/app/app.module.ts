import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormblockComponent } from './formblock/formblock.component';
import { CommentsCompComponent } from './comments-comp/comments-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FormblockComponent,
    CommentsCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
