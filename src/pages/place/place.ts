import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThirdPage } from '../third/third';

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  namePlace: String = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.namePlace = navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  navigateTo() {
    this.navCtrl.pop();
  }

  navigateToThird() {
    this.navCtrl.push(ThirdPage);
  }

}
