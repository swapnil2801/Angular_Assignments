import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Data :String = "";
  public Length : number = 0;

  onKey(event : any)
  {
    this.Length = event.target.value.length;
  }
}
