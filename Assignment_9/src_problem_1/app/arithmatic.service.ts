import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  public add(A : number,B : number)
  {
    return A + B;
  }

  public sub(A : number , B : number)
  {
    return A - B;
  }

  constructor(){}
}
