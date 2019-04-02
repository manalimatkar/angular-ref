import { Component, Input, OnInit } from "@angular/core"
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.component.html',
  styleUrls: ['./firstname.component.css']
})
export class FirstNameComponent implements OnInit {
  @Input() parentForm: FormGroup;
  firstname = new FormControl('', [Validators.required]);
  constructor() { }

  ngOnInit() {
    this.parentForm.addControl('firstname', this.firstname);
  }

}
