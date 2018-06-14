import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { PlaceModel } from "../pages/place/PlaceModel";

@Injectable()

export class PlaceService {

  private placesCollection: AngularFirestoreCollection<PlaceModel>;
  places: Observable<PlaceModel[]>;

  constructor(
    public afdb: AngularFireDatabase,
    private afs: AngularFirestore
  ) {
    this.placesCollection = this.afs.collection<PlaceModel>('places');
    this.places = this.placesCollection.valueChanges();
  }

  getPlaces(){
    return this.places;
  }

  // getPlaces(){
  //   return this.afdb.list('/places/');
  // }

  getPlace(id) {
    return this.afdb.object(`/places/${id}`);
  }

  createPlace(place: PlaceModel) {
    const id = this.afs.createId();
    place.id = id;
    place.createdAt = new Date();
    return this.placesCollection.doc<PlaceModel>(id).set(place);
  }

  updatePlace(place: PlaceModel) {
    return this.placesCollection.doc<PlaceModel>(place.id).update(place);
    // this.afdb.database.ref(`places/${place.id}`).set(place);
  }

  deletePlace(place: PlaceModel){
    return this.placesCollection.doc(place.id).delete();
  }
}
