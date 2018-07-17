import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular'; 
import { HomePage } from '../home/home'; 
import { SignupPage } from '../signup/signup'; 
import { UserServiceProvider } from '../../providers/user-service/user-service'; 

/** 
 * Generated class for the LoginPage page. * 
 *  See https://ionicframework.com/docs/components/#navigation for more info on 
 *  Ionic pages and navigation. 
 * 
 * */ 

 @Component({ 
   selector: 'page-login', 
   templateUrl: 'login.html', 
  })
  export class LoginPage {
   model = { 
     username: "", 
     password: "" 
    } 
    
    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private userService: UserServiceProvider, 
      private menu: MenuController
    ) { 

    } 
    
    ionViewDidEnter() { 
      this.menu.swipeEnable(false); 
    
    } 
    
    ionViewWillLeave() {
     this.menu.swipeEnable(true); 
    
    } 
    onViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }
  
    login() {
     console.log(this.model);
     this.userService.login(this.model).then(user => { 
      this.navCtrl.setRoot(HomePage);
  }).catch(err => { 
    alert("Usuário ou senha não encontrados.");
  });

  } 
  signup() {
    this.navCtrl.push(SignupPage); 
  }

=======
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { UserServiceProvider } from '../../providers/user-service/user-service';
/*
 * Generated class for the LoginPage page. 
 * See https://ionicframework.com/docs/components/#navigation for more info on 
 * Ionic pages and navigation.
 * 
 */ 

 @Component({
   selector: 'page-login',
   templateUrl: 'login.html',
  })
  export class LoginPage {
  model = {
    username: "",
    password: ""
  } 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private userService: UserServiceProvider, 
    private menu: MenuController
  ) {

  } 
  ionViewDidEnter() { 
    this.menu.swipeEnable(false);
  }
  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }
  login() {
    console.log(this.model);
    this.userService.login(this.model).then(user => {
      this.navCtrl.setRoot(HomePage);
    }).catch(err => {
      alert("Usuário ou senha não encontrados.");
    });
  } 
  signup() { this.navCtrl.push(SignupPage);
  }
>>>>>>> 8ff91210385186c9886816ffe2c90f4f51fc9630
}