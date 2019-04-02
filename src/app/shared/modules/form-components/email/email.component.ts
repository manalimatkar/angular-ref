import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @Input('') disabled: Boolean;
  @Input('') parentForm: FormGroup;
  email = new FormControl('', [Validators.required, ValidationService.emailValidator]);

  constructor() { }

  ngOnInit() {
    this.parentForm.addControl('email', this.email);
  }

}
