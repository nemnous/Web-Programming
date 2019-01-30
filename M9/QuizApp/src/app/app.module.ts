import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './quiz/questions/questions.component';
import { HintComponent } from './quiz/questions/hint/hint.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionsComponent,
    HintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
