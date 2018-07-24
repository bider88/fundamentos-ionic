import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs";

@Injectable()

export class AuthService {

  user: Observable<firebase.User>;

  constructor(
    public authAngularFire: AngularFireAuth
  ) {
    this.user = authAngularFire.authState;
  }

  login() {
    return this.authAngularFire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  logout() {
    return this.authAngularFire.auth.signOut();
  }

}
