import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/** 
 * Generated class for the SignupPage page. 
 * 
 * See https://ionicframework.com/docs/components/#navigation for more info on 
 *  Ionic pages and navigation. 
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  model = {
    email: "",
    password: "",
    name: "",
    nickname: ""
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private userService: UserServiceProvider
  ) {
  }


  signup() { 
    console.log(this.model) 
     this.userService.createUser(this.model).then((response) => { 
      this.navCtrl.setRoot(HomePage);
     }, (err) => { 
       console.log(err); 
       if (err.code == "auth/email-already-in-use") { 
         alert("Este e-mail já está sendo usado por outra pessoa.");
       } 
     })
  }

}
