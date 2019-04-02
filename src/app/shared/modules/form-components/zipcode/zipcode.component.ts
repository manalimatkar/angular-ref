import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {
  @Input('') parentForm: FormGroup;
  zipcode = new FormControl('', [Validators.required, ValidationService.zipValidator]);

  constructor() { }

  ngOnInit() {
    this.parentForm.addControl('zipcode', this.zipcode);
  }

}
