import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService{

  constructor() { }

  getHelloo():string{
    return 'Hello Word!'
  }
}
