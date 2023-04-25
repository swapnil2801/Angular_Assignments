import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public CountCapital(str : String) : number
  {
    let cnt : number = 0;

    for(let i : number = 0;i < str.length;i++)
    {
      if(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z')
      {
        cnt++;
      }
    }

    return cnt;
  }
}
