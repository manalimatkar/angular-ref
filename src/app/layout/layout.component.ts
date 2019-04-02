import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    constructor(public router: Router, private location: PlatformLocation) {
        location.onPopState(() => {

            console.log('pressed back!');

        });
    }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/forms/home']);
        }
        // this.location.replaceState('', null , 'home/myformscomponent');

    }

}
