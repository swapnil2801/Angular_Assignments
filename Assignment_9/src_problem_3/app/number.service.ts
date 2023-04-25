import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  public ChkPrime(iNo : number)
  {
    let i : number = 0;
    
    let bFlag: boolean = true;

    for(i = 2;i <= iNo/2;i++)
    {
      if(Math.floor(iNo % i) == 0)
      {
        bFlag = false;
      }
    }
    return bFlag;
  }

  constructor() { }
}
