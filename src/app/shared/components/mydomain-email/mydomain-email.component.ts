import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// custom validator function
function emailDomainValidator(control: FormControl) {
  const email = control.value;
  if (email && email.indexOf('@') !== -1) {
    const [_, domain] = email.split('@');
    if (domain !== 'mediasourcery.com') {
      return {
        emailDomain: {
          parsedDomain: domain
        }
      };
    }
  }
  return null;
}
@Component({
  selector: 'app-mydomain-email',
  templateUrl: './mydomain-email.component.html',
  styleUrls: ['./mydomain-email.component.css']
})
export class MydomainEmailComponent implements OnInit {
@Input() parentForm: FormGroup;
mydomainEmail = new FormControl('', [Validators.required, Validators.minLength(10), emailDomainValidator]);
  constructor() { }

  ngOnInit() {
    this.parentForm.addControl('mydomainEmail', this.mydomainEmail);
  }

}
