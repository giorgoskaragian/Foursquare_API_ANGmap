import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { MapPage } from '../map/map';

@Component({
    selector: 'page-details',
    templateUrl: 'details.html'
})
export class DetailsPage {
    item: any;
    price_tier: any;

    constructor(public navCtrl: NavController, public params: NavParams, private modalCtrl: ModalController) {
        this.item = params.get('item');
        if (this.item.venue.price) {
            let i = this.item.venue.price.tier;
            let c = this.item.venue.price.currency;
            this.price_tier = [];
            for (let index = 0; index < i; index++) {
                this.price_tier.push(c);
            }
        }
    }
   
    openMap() {
        const modalMap: Modal = this.modalCtrl.create(MapPage, { "lat": this.item.venue.location.lat, "lng": this.item.venue.location.lng});
        modalMap.present();
    }
   
}
