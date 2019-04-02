import { Component, OnInit } from '@angular/core';
import { DynamicAbstractComponent } from '../dynamicabs.component';

@Component({
  selector: 'app-unknowndynamic',
  templateUrl: './unknowndynamic.component.html',
  styleUrls: ['./unknowndynamic.component.css']
})
export class UnknownDynamicComponent extends DynamicAbstractComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }

}
