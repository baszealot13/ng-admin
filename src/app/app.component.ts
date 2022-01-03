import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    toggle: Element;
    nav: Element;
    bodypd: Element;
    headerpd: Element;
    // linkColor: any;

    ngOnInit() {
        this.toggle = document.getElementById('header-toggle');
        this.nav = document.getElementById('nav-bar');
        this.bodypd = document.getElementById('body-pd');
        this.headerpd = document.getElementById('header');
        // this.linkColor = document.querySelectorAll('.nav_link');
    }

    toggleClick() {
        this.nav.classList.toggle('show');
        this.toggle.classList.toggle('bx-x');
        this.bodypd.classList.toggle('body-pd');
        this.headerpd.classList.toggle('body-pd');
    }

    // colorLink() {
    //     if (this.linkColor) {
    //         this.linkColor.forEach(l => l.classList.remove('active'))
    //         this.classList.add('active')
    //     }
    // }
}
