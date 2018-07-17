import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignupPage } from '../pages/signup/signup';
<<<<<<< HEAD
import {UserServiceProvider} from '../providers/user-service/user-service';
=======
import { UserServiceProvider } from '../providers/user-service/user-service';
>>>>>>> 8ff91210385186c9886816ffe2c90f4f51fc9630
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

<<<<<<< HEAD

=======
>>>>>>> 8ff91210385186c9886816ffe2c90f4f51fc9630
  rootPage: any = this.userService.isLogedIn() ? HomePage : LoginPage;

  pages: Array<{title: string, component: any}>;

<<<<<<< HEAD
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private userService: UserServiceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
   this.pages = [ 
     { title: 'Home', component: HomePage }, 
     { title: 'List', component: ListPage }, 
     { title: 'Logout', component: null } ];
=======
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen
    , private userService: UserServiceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Logout', component: null }
    ];
>>>>>>> 8ff91210385186c9886816ffe2c90f4f51fc9630

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

<<<<<<< HEAD
  openPage(page) { 
    // Reset the content nav to have just this page 
    // we wouldn't want the back button to show in this scenario 
    if(page.title == "Logout"){ 
      this.userService.logout().then(() => { 
        this.nav.setRoot(LoginPage);
      }
    ) }else{ 
      this.nav.setRoot(page.component); 
    } 
=======
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title == "Logout"){
      this.userService.logout().then(() => {
        this.nav.setRoot(LoginPage);
      })
    }else{
      this.nav.setRoot(page.component);
    }
>>>>>>> 8ff91210385186c9886816ffe2c90f4f51fc9630
  }
}
