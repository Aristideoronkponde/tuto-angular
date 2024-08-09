import { Component ,EventEmitter,Output } from '@angular/core';
import {MyService} from '../my-service.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

message:string='';

constructor(private MyService:MyService){}

ngOnInit():void {
  this.message=this.MyService.getHelloo()
}


  onClick() {
    console.log('bouton cliquer');
  }

  @Output()messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit('bonjour ma fille')
  }
}
