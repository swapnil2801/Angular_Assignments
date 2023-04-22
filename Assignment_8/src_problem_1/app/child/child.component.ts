import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  public str ="";
  @Output() public Myevent = new EventEmitter();
  public GetData(name : any)
  {
    this.str = name;
    this.Myevent.emit(this.str);
  }
}
