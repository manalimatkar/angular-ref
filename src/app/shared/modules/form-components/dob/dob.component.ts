import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';

@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.css']
})
export class DobComponent implements OnInit {
  @Input('') parentForm: FormGroup;
  dob = new FormControl('', [Validators.required]);
  constructor() { }

  ngOnInit() {
    this.parentForm.addControl('dob', this.dob);
  }

}
