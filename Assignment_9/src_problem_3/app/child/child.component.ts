import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public fRet :boolean = false;
  public ans1 = "";
  public ans2 = 0;

  constructor(public nobj : NumberService,public sobj : StringService)
  {}

  ngOnInit()
  {
    this.fRet = this.nobj.ChkPrime(11);
    this.ans2 = this.sobj.CountCapital("HeLLO obj");

    if(this.fRet == true)
    {
      this.ans1 = "prime number.";
    }
    else
    {
      this.ans1 = "not a prime number.";
    }
  }
}
