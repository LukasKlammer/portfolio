import { Component } from '@angular/core';
import * as myGlobals from '../shared/globals';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
  public whatsAppPreWrittenMessage: string = myGlobals.whatsAppPreWrittenMessage;
  public whatsAppPhone: string = myGlobals.whatsAppPhone;


  constructor() {   }


}
