import { Component } from '@angular/core';
import { GetdateService } from "./service/getdate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tuto-angular';
 dJour:string='';
 private today:GetdateService =  new GetdateService
 constructor(today:GetdateService){}
  //  constructor(private today:GetdateService){}

  receivemessage(message:string){
    console.log(message);
  }
  ngOnInit():void {
    this.dJour=this.today.dateDuJour()
  }
}
