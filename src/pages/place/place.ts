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
  placeSaving: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public placeService: PlaceService,
    private toastCtrl: ToastController
  ) {
    this.place = this.navParams.get('place');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  presentToast(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();

    toast.onDidDismiss(() => {
      this.navCtrl.popToRoot();
    });

  }

  savePlace() {
    this.placeSaving = true;
    if (!this.place.id) {
      this.placeService.createPlace(this.place)
        .then(res => {
          this.presentToast('Place was added successfully');
        })
        .catch(
          err => { console.log(err);
            this.placeSaving = false;
        });
    } else {
      this.placeService.updatePlace(this.place)
        .then(() => {
          this.presentToast('Place was updated successfully');
        })
        .catch(
          err => { console.log(err);
            this.placeSaving = false;
        });
    }
  }

}
