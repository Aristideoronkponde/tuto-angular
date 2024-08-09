import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruemessageComponent } from './truemessage/truemessage.component';
import { FalsemessageComponent } from './falsemessage/falsemessage.component';



@NgModule({
  declarations: [
    TruemessageComponent,
    FalsemessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TruemessageComponent,
    FalsemessageComponent
  ]
})
export class MessageModule { }
