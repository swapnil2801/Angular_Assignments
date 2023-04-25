import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { WrongChoicComponent } from './wrong-choic/wrong-choic.component';

const routes: Routes = [
  {path : 'technology', component : TechnologyComponent},
  {path : 'books', component : BooksComponent},
  {path : '',component : WrongChoicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
