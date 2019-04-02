import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from '../../../../shared/services/validation.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
@Input() parentForm: FormGroup;
@Input() show: boolean;

private showEmail:boolean;

email = new FormControl('');
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes['show']){
      this.showEmail = changes['show'].currentValue;
      if(changes['show'].isFirstChange()){
       console.log(changes['show'].isFirstChange());
      }else{
        if(changes['show'].currentValue){
          this.email.setValidators([Validators.required, ValidationService.emailValidator]);
          this.email.updateValueAndValidity();
        } else if(!changes['show'].currentValue){
         this.email.setValidators(null);
         this.email.updateValueAndValidity();
        }
      }
    }
  }
  ngOnInit() {
    this.parentForm.addControl('email', this.email);
  }

}
