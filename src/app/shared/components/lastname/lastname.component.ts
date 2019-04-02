import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-lastname',
  templateUrl: './lastname.component.html',
  styleUrls: ['./lastname.component.css']
})
export class LastnameComponent implements OnInit {
 @Input() parentForm: FormGroup;
 lastname = new FormControl('', Validators.required);
  constructor() { }

  ngOnInit() {
    this.parentForm.addControl('lastname', this.lastname);
  }

}
