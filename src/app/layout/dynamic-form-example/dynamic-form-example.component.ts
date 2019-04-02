import { Component, ViewChild, AfterViewInit, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FieldConfig } from '../../shared/modules/dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../shared/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dynamic-form-example',
  templateUrl: './dynamic-form-example.component.html',
  styleUrls: ['./dynamic-form-example.component.css']
})
export class DynamicFormExampleComponent implements AfterViewInit, OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

 title = 'app';

 config: FieldConfig[] = [
    {
      type: 'input',
      label: 'First name',
      name: 'firstName',
      placeholder: 'Enter first name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Last name',
      name: 'lastName',
      placeholder: 'Enter last name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  public agentForm: FormGroup;

  constructor(private _fb: FormBuilder) {}
  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });
     this.form.setDisabled('submit', true);
     this.form.setValue('firstName', 'John');
  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }
  ngOnInit() {
  }

}
