import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {
    category: any;
    limit: any;

    constructor(private viewCtrl: ViewController, private navParams: NavParams) {
        this.getDefaults();
    }


    getCategory(category) {
        this.category = category;
    }

    getLimit(limit) {
         this.limit = limit;
    }

    closeSettings() {
        this.viewCtrl.dismiss(this.category,this.limit);
    }

    getDefaults() {
        if (localStorage.getItem('category') != null) {
            this.category = localStorage.getItem('category');
        } else {
            this.category = 'topPicks';
        }

        if (localStorage.getItem('limit') != null) {
            this.limit = localStorage.getItem('limit');
        } else {
            this.limit = 5;
        }
    }

    setDefaults() {
        localStorage.setItem('category', this.category);
        localStorage.setItem('limit', this.limit);
        this.closeSettings();
    }
}



