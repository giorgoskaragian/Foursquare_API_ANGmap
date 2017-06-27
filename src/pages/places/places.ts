import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController, AlertController } from 'ionic-angular';
import { FoursquareService } from '../../app/services/foursquare.service';
import { DetailsPage } from '../details/details';
import { SettingsPage } from '../settings/settings';
import { Keyboard } from '@ionic-native/keyboard';


@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

    items: any;
    city: String;
    category: String;
    limit: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private foursquareService: FoursquareService, private modalCtrl: ModalController, private alertCtrl: AlertController, private keyboard: Keyboard) {
        this.getDefaults(this.navParams.get("city"));
    }

    //Runs when the component is rendered
    ngOnInit() {
        this.getPlaces(this.city, this.category, this.limit);
    }

    getDefaults(city) {
        if (localStorage.getItem('city') != null) {
            this.limit = localStorage.getItem('city');
        } else {
            this.city = city;
        }

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

    presentModal() {
        let modal = this.modalCtrl.create(SettingsPage);
        modal.present();
    }

    getPlaces(city, section, limit) {
        if(this.city !==''){
          this.foursquareService.getPlaces(city, section, limit)
              .subscribe(response => {
                  this.items = response.response.groups["0"].items;
                  this.keyboard.close();
              },
              err => this.presentAlert());
        }
    }

    getCity(ev: any) {
        this.city = ev.target.value;
        this.getPlaces(this.city, this.category, this.limit);
    }

    getCategory(category) {
        if (this.city !== '') {
            this.category = category;
            this.getPlaces(this.city, this.category, this.limit);
        }
    }

    getLimit(limit) {
        if (this.city !== '') {
            this.limit = limit;
            this.getPlaces(this.city, this.category, this.limit);
        }
    }
    
    viewItem(item) {
        this.navCtrl.push(DetailsPage, {
            item: item
        });
    }


    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'City not found',
            message: 'Please provice a valid city name.',
            buttons: ['Dismiss']
        });
        alert.present();
    }

    openSettings() {
        const modalSettings: Modal = this.modalCtrl.create(SettingsPage);
        modalSettings.present();
        modalSettings.onDidDismiss((category, limit) => {
            this.category = category;
            this.limit = limit;
        });
    }
    
}
