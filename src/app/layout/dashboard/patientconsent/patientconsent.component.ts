import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-patientconsent', 
  templateUrl: './patientconsent.component.html',
  styleUrls: ['./patientconsent.component.css']
})
export class PatientConsentComponent implements OnInit {

  public calloutcome = [
    {
      code: "C",
      text: "Consent"
    }, {
      code: "D",
      text: "Decline"
    }, {
      code: "NC",
      text: "No Contact"
    }
  ];
  public myForm : FormGroup;
  showFollowUpDate : boolean = true;
  showAddNote : boolean = false;
  @Output('')ontaskcomplete : EventEmitter < number >;
  @Input('')currentTask : number;

  constructor(private _fb : FormBuilder) {
    this.ontaskcomplete = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.currentTask);
    this.buildForm();
  }

  buildForm() {
    this.myForm = this
      ._fb
      .group({
        outcome: [
          '',
          [Validators.required]
        ],
        followup: ['']
      });
  }

  updateControls(event : string) {
    console.log(event);
    if (event == "NC") {
      this.showFollowUpDate = true;
      this.showAddNote = true;
    } else if (event == "C" || event == "D") {
      this.showFollowUpDate = false;
      this.showAddNote = false;
    }
  }

  save() {
    // call API to save ...
    console.log(this.myForm.value);
    this.buildForm();
    this.showFollowUpDate = true;
    this.showAddNote = false;
    this
      .ontaskcomplete
      .emit(this.currentTask + 1);

  }

}
