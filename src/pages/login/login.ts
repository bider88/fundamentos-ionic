import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private authService: AuthService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginGoogle() {
    this.authService.login()
      .then(res => {
        console.log(res);
        this.viewCtrl.dismiss();
        localStorage.setItem('loginData', JSON.stringify(res));
      }).catch(err => console.log(err))
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
