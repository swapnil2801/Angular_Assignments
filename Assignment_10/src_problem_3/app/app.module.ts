import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { WrongChoicComponent } from './wrong-choic/wrong-choic.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    BooksComponent,
    WrongChoicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
