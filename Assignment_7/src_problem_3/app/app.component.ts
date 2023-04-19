import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public str : String = "Marvellous Infosystems";

  public fun() : String
  {
    this.str = "Educating for Better tomorrow";
    return this.str;
  }
}
