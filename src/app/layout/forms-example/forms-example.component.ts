import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css'],
  animations: [routerTransition()]
})
export class FormsExampleComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
    });
    console.log(this.userForm);
  }
  saveUser() {
    console.log(this.userForm.value);
  }

}
