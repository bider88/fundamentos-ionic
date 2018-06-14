import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()

export class PlaceService {
  constructor(
    public afdb: AngularFireDatabase
  ) {}

  getPlaces(){
    return this.afdb.list('/places/');
  }

  getPlace(id) {
    return this.afdb.object(`/places/${id}`);
  }

  createPlace(place) {
    return this.afdb.database.ref('places').set(place);
  }

  updatePlace(place) {
    this.afdb.database.ref(`places/${place.id}`).set(place);
  }

  deletePlace(place){
    return this.afdb.database.ref(`/places/${place.id}`).remove();
  }
}
