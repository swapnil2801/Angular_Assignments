import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public Addition : number = 0;
  public Subtraction : number = 0;
  constructor(public mobj : ArithmaticService)
  {}

  ngOnInit()
  {
    this.Addition = this.mobj.add(11,10);
    this.Subtraction = this.mobj.sub(11,10);
  }
}
