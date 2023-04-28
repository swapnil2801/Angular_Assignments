import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value : string): string 
  {
    let str : string = "";
    for(let char of value)
    {
      str = char+str;
    }
    return str;
  }
}
