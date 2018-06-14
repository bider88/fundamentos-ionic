import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacePage } from '../place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateTo(name) {
    this.navCtrl.push(PlacePage, {name});
  }

}
