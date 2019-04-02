import { Component, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {
    @Input() heading: string;
    @Input() icon: string;
    @Input() parent: string;
    param : any;
    constructor( translate:TranslateService){
      
    }
}
