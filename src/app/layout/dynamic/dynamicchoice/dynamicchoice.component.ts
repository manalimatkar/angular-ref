import { Component, OnInit } from '@angular/core';
import { DynamicAbstractComponent } from '../dynamicabs.component';

@Component({
  selector: 'app-dynamicchoice',
  templateUrl: './dynamicchoice.component.html',
  styleUrls: ['./dynamicchoice.component.css']
})
export class DynamicChoiceComponent extends DynamicAbstractComponent implements OnInit {

  // constructor() { }
  items: any;

  ngOnInit() {
    this.items = this.content[0];
    // console.log(this.content[0]);
  }

}
