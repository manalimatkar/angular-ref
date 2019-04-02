import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact-consent',
  templateUrl: './contact-consent.component.html',
  styleUrls: ['./contact-consent.component.css']
})
export class ContactConsentComponent implements OnInit {
@Input() parentForm: FormGroup;
showPhone = false;
showEmail = false;

contactType = [
  {
    option: 'Home',
    code: 'home'
  }, {
    option: 'Email',
    code: 'email'
  }, {
    option: 'Mobile',
    code: 'mobile'
  }
]
contactConsent: FormGroup;

constructor(private _fb : FormBuilder) { }
  ngOnInit() {
   this.contactConsent = this._fb.group({

   });
   this.addContactConsent();
  }

addContactConsent(){
  this.parentForm.addControl('contactConsent', this.contactConsent);
}
showOption(value:any){
   console.log(value);
   if (value === 'mobile' || value === 'home'){
     this.showPhone = true;
     this.showEmail = false;
   } else {
     this.showEmail = true;
     this.showPhone = false;
   }
}
}
