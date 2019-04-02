import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.css']
})
export class OptionSelectComponent implements OnInit {
  @Input('') parentForm?: FormGroup;
  @Input('') fieldTitle: string;
  @Input('') choices:any;
  @Output('') selectedOption: EventEmitter <any>;


  rebuttals = new FormControl('');

  constructor() {
    this.selectedOption = new EventEmitter();
   }

  ngOnInit() {
    this.parentForm.addControl('rebuttals', this.rebuttals);
  }
  onChange(content: any){
    // console.log(content);
    this.selectedOption.emit(content);
  }
}
