import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param : string): string
  {
    let str : string = "";
    let flag : boolean = false;
    if(param == "Prime")
    {
      for(let i : number = 0;i <= Math.floor(value/2);i++)
      {
        if(Math.floor(value % i) == 0)
        {
          flag = true;
        }
      }
      if(flag == true)
      {
        str = "It is prime number";
      }
      else
      {
        str = "It is not a prime number";
      }
    }
    else if(param == "Perfect")
    {
      let temp : number = 0;
      for(let i : number = 0;i <= Math.floor(value/2);i++)
      {
        if(Math.floor(value % i) == 0)
        {
          temp += i;
        }
      }
      if(temp == value)
      {
        str= "It is a perfect number";
      }
      else 
      {
        str = "It is not a perfect number";
      }
    }
    else if(param == "Even")
    {
      if(Math.floor(value % 2) == 0)
      {
        str = "It is an even number";
      }
      else
      {
        str = "It is not an even number";
      }
    }
    else if(param == "Odd")
    {
      if(Math.floor(value % 2) != 0)
      {
        str = "It is an odd number";
      }
      else
      {
        str = "It is not an odd number";
      }
    }

    return str;
  }
}
