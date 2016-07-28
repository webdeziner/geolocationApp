import {Component} from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    public lat: number;
    public long: number;
    public altitude: number;
    constructor(private platform: Platform, private navCtrl: NavController) {
        platform.ready().then(() => {
            console.log("Home ready");
        });
    }

    findMe(event) {
        Geolocation.getCurrentPosition().then((response) => {
            this.lat = response.coords.latitude;
            this.long = response.coords.longitude;
            this.altitude = response.coords.altitude;
        }, (error) => {
            console.log("Error: ", error);
        });
    }
}
