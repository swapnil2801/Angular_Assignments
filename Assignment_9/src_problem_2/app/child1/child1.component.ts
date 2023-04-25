import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  public fRet : boolean = false;
  public ans : string = "";
  constructor(public nobj : NumberService)
  {}

  ngOnInit()
  {
    this.fRet = this.nobj.ChkPrime(20);
    if(this.fRet == true)
    {
      this.ans = "prime number";
    }
    else
    {
      this.ans = "not a prime number";
    }
  }
}
