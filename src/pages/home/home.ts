import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
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
    public loadingCtrl: LoadingController
  ) {
    this.loadingInit();
    this.getPlaces();
  }

  getPlaces() {
    this.loading.present();
    this.placeService.getPlaces().subscribe(
      res => {
        console.log(res);
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

  goToCreatePlace() {
    this.navCtrl.push(PlacePage, {})
  }

  goToPlaceDetail(place: PlaceModel) {
    this.navCtrl.push(PlacePage, {place})
  }

  // getPlaces() {
  //   this.loading.present();
  //   this.placeService.getPlaces().valueChanges()
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.places = res;
  //         this.loading.dismiss();
  //       },
  //       err => {
  //         console.log(err);
  //         this.loading.dismiss();
  //       }
  //     );
  // }

}
