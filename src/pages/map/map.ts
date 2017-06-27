import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
    
    lat: number;
    lng: number;

    constructor(private navParams: NavParams, private viewCtrl: ViewController, public geolocation: Geolocation) {
        this.lat = this.navParams.get("lat");
        this.lng = this.navParams.get("lng");
    }
    closeMap() {
        this.viewCtrl.dismiss();
    }  
}
