import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlacesPage } from '../places/places';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  city: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  getCity(ev: any) {
      this.city = ev.target.value;
      this.navCtrl.push(PlacesPage, { "city": this.city });
  }
}
