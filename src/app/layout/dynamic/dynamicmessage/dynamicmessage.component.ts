import { Component, OnInit } from '@angular/core';
import { DynamicAbstractComponent } from '../dynamicabs.component';
@Component({
  selector: 'app-dynamicmessage',
  templateUrl: './dynamicmessage.component.html',
  styleUrls: ['./dynamicmessage.component.css']
})
export class DynamicMessageComponent extends DynamicAbstractComponent implements OnInit {
  items: any[];
  // constructor() { }

  ngOnInit() {
    this.items = this.content[0];
  }

}
