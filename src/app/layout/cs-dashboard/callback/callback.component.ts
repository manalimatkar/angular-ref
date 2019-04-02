import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
 @Input('')callbackReason:any;
 @Input('')messageContent:any;
 showFollowUpDate : boolean = true;
 
 public myForm : FormGroup;
  constructor(private _fb : FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.myForm = this
      ._fb
      .group({
        reason: [
          '',
          [Validators.required]
        ],
        followup: ['']
      });
  }
  updateControls(event : any) {
    // console.log(event);
    if (event === 103) {
      this.showFollowUpDate = true;
     
    } else if (event == 101) {
      this.showFollowUpDate = false;      
    }
  }
  save() {
    // call API to save ...
    console.log(this.myForm.value);
    // this.buildForm();
    // this.showFollowUpDate = true;
  }
}
