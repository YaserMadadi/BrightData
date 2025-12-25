import { Component } from '@angular/core';
import { Address } from './address/address';
import { Callus } from './callus/callus';
import { Emailus } from './emailus/emailus';
import { GoogleMap } from './google-map/google-map';
import { Message } from './message/message';

@Component({
  selector: 'app-contact',
  imports: [
    Address,
    Callus,
    Emailus,
    GoogleMap,
    Message
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

}
