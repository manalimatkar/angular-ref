import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

import persons from './data-table-demo-data';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.css']
})
export class DataTableDemoComponent implements OnInit {

  itemResource = new DataTableResource(persons);
  items = [];
  itemCount = 0;

  constructor() {
    this.itemResource.count().then(count => this.itemCount = count);    
   }

  ngOnInit() {
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.name);
}

rowDoubleClick(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.name);
}

rowTooltip(item) { return item.jobTitle; }


}
