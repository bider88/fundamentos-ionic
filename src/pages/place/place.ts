import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PlaceService } from '../../services/places.service';
import { PlaceModel } from './PlaceModel';

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

  place: PlaceModel;
  msg: string = '';
  toast;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public placeService: PlaceService,
    private toastCtrl: ToastController
  ) {
    this.presentToast();
    this.place = this.navParams.get('place');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  presentToast() {
    this.toast = this.toastCtrl.create({
      message: this.msg,
      duration: 3000,
      position: 'bottom'
    });

    this.toast.onDidDismiss(() => {
      this.navCtrl.pop();
    });

  }

  savePlace() {
    if (!this.place.id) {
      this.placeService.createPlace(this.place)
        .then(res => {
          this.msg = 'Place was added successfully';
          this.toast.present();
          console.log(res)
        })
        .catch(err => console.log(err));
    } else {
      this.placeService.updatePlace(this.place)
        .then(() => {
          this.msg = 'Place was updated successfully';
          this.toast.present();
        })
        .catch(err => console.log(err))
    }
  }

}
