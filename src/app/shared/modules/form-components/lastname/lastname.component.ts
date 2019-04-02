import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../services/validation.service';

@Component({
  selector: 'app-lastname',
  templateUrl: './lastname.component.html',
  styleUrls: ['./lastname.component.css']
})
export class LastNameComponent implements OnInit {
  @Input('') parentForm: FormGroup;
  lastname = new FormControl('', [Validators.required]);
  constructor() { }

  ngOnInit() {
    this.parentForm.addControl('lastname', this.lastname);
  }

}
