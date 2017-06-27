import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AgmCoreModule } from '@agm/core';
import { Keyboard } from '@ionic-native/keyboard';

import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { PlacesPage } from '../pages/places/places';
import { DetailsPage } from '../pages/details/details';
import { SettingsPage } from '../pages/settings/settings';
import { MapPage } from '../pages/map/map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'cff20835'
  }
};



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    PlacesPage,
    DetailsPage,
    SettingsPage,
    LoginPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCTCFiMjjsIWx1zvLk8EXZhW-qi6DMAlGo'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    PlacesPage,
    DetailsPage,
    SettingsPage,
    LoginPage,
    MapPage
  ],
  providers: [
    Keyboard,
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
