import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() show: boolean;
  @Input() label: string;

  private showphone: boolean;
  private textLabel: string = '';
  phone = new FormControl('');
  constructor() { }

 ngOnChanges(changes: SimpleChanges) {
   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
   //Add '${implements OnChanges}' to the class.
   if(changes['show']){
     this.showphone = changes['show'].currentValue;
     if(changes['show'].isFirstChange()){
      console.log(changes['show'].isFirstChange());
     }else{
       if(changes['show'].currentValue){
         this.phone.setValidators([Validators.required, Validators.pattern(/^[0-9]{3}[0-9]{3}[0-9]{4}$/)]);
         this.phone.updateValueAndValidity();
       } else if(!changes['show'].currentValue){
        this.phone.setValidators(null);
        this.phone.updateValueAndValidity();
       }
     }
   }

   if(changes['label']) {
     this.textLabel = changes['label'].currentValue;
   }
 }

  ngOnInit() {
    this.parentForm.addControl('phone', this.phone);
  }

}
