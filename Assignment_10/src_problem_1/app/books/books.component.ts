import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books = ["Learning Angular","Node.js in action","Android Programming","Big data - black book","Learn AI"];
}
