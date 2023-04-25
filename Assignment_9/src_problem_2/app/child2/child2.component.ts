import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component 
{
  public ans : number = 0;

  constructor(public sobj : StringService){}

  ngOnInit()
  {
    this.ans = this.sobj.CountCapital("HeLLo World");
  }
}
