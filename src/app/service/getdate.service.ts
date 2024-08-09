import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetdateService {

  
  constructor() { }
  dateDuJour(){
    const date =new Date(Date.now())
    return "La date aujourd'hui " + date
  }
}
