import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThirdPage } from '../third/third';

/**
 * Generated class for the ViewxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewx',
  templateUrl: 'viewx.html',
})
export class ViewxPage {

  namePlace: String = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.namePlace = this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewxPage');
  }

  navigateTo() {
    this.navCtrl.pop();
  }

  navigateToThird() {
    this.navCtrl.push(ThirdPage);
  }

}
