import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';


@Injectable()

export class FoursquareService {

    http: any;
    baseUrl: string;
    oauth_token: string;

    constructor(http: Http) {
        this.http = http;
        this.oauth_token = "oauth_token=MK1SSHRYCSSLRDSY4NXYCGZQPSQFCWIZ20JR4GIMRHZ1RFB3&v=20131016";
        this.baseUrl = "https://api.foursquare.com/v2/venues/explore?";
    }

    getPlaces(city, section, limit) {
        return this.http.get(this.baseUrl + this.oauth_token + "&venuePhotos=1" + "&section=" + section + "&limit=" + limit + "&near=" + city)
            .map(res => res.json());
    }
}