import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Input('') disabled: Boolean;
  @Input('') parentForm: FormGroup;
  @Input('') label = 'Phone';
  @Input('') name = 'phone';
  phone = new FormControl('', [Validators.required, ValidationService.phoneValidator]);

  constructor() { }

  ngOnInit() {
    this.parentForm.addControl(this.name, this.phone);
  }
}
