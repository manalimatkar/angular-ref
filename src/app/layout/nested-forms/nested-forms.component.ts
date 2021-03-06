import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './customer.interface';

@Component({
  selector: 'app-nested-forms',
  templateUrl: './nested-forms.component.html',
  styleUrls: ['./nested-forms.component.css']
})
export class NestedFormsComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }


  ngOnInit() {
    this.myForm = this._fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        addresses: this._fb.array([])
    });

    // add address
    this.addAddress();
    console.log(this.myForm.controls);
    /* subscribe to addresses value changes */
    // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
    //   console.log(x);
    // })
}

initAddress() {
    return this._fb.group({
        street: ['', Validators.required],
        postcode: ['']
    });
}

addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    const addrCtrl = this.initAddress();

    control.push(addrCtrl);

    /* subscribe to individual address value changes */
    // addrCtrl.valueChanges.subscribe(x => {
    //   console.log(x);
    // })
}

removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
}

save(model:any) {
    // call API to save
    // ...
    console.log(model.value);
}
}
