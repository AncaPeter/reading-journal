import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TrendingBooksComponent } from './trending-books/trending-books.component';

const routes: Routes = [
  { path: 'home', component: BooksComponent },
  { path: 'read-books', component: BooksComponent },
  { path: 'trending-books', component: TrendingBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
