import { Component, Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() public Myevent = new EventEmitter();
  @Input() public MessageFromParent : string= "";
  public Send()
  {
    this.Myevent.emit("Hello parent");
  }
}
