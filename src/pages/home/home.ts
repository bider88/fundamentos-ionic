import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { PlaceService } from '../../services/places.service';
import { PlacePage } from '../place/place';
import { PlaceModel } from '../place/PlaceModel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: PlaceModel[] = [];
  loading;

  constructor(
    public navCtrl: NavController,
    public placeService: PlaceService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.loadingInit();
    this.getPlaces();
  }

  getPlaces() {
    this.loading.present();
    this.placeService.getPlaces().subscribe(
      res => {
        this.places = res;
        this.loading.dismiss();
      },
      err => {
        console.log(err);
        this.loading.dismiss();
      }
    );
  }

  loadingInit() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
  }

  goToPlace(place: PlaceModel) {
    this.navCtrl.push(PlacePage, {place})
  }

  private deletePlace(place: PlaceModel) {
    this.placeService.deletePlace(place)
        .then(() => this.presentToast('Place was deleted successfully') )
        .catch(err => console.log(err));
  }

  confirmDeletePlace(place: PlaceModel) {
    const confirm = this.alertCtrl.create({
      title: 'Delete place',
      message: 'Are you sure you want to delete it?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('place saved');
          }
        },
        {
          text: 'Delete it!',
          handler: () => {
            this.deletePlace(place);
          }
        }
      ]
    });
    confirm.present();
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

}
