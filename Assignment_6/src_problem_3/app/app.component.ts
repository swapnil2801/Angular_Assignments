import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Marvellous Infosystems</h1>
  <input #Var type="text">
  `,
  styles: [`
  h1
  {
    color : blue;
  }
  `]
})

export class AppComponent {
  public title = "Marvellous Infosystem";

  public flag = true;
}
