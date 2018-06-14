import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlaceService } from '../../services/places.service';

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

  place: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public placeService: PlaceService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  savePlace() {
    this.placeService.createPlace(this.place);
  }

}
