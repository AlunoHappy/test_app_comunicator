import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { ChatProvider } from '../providers/chat/chat';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { SignupPageModule } from '../pages/signup/signup.module';
import { LoginPageModule } from '../pages/login/login.module';

export const firebaseConfig = {
<<<<<<< HEAD
    apiKey: "AIzaSyAKONqUEypZzGOFWqT998-Gtpb1g-5tuxs",
    authDomain: "comunicator-6589e.firebaseapp.com",
    databaseURL: "https://comunicator-6589e.firebaseio.com",
    projectId: "comunicator-6589e",
    storageBucket: "comunicator-6589e.appspot.com",
    messagingSenderId: "579880398180"
  };
=======
  apiKey: "AIzaSyAKONqUEypZzGOFWqT998-Gtpb1g-5tuxs",
  authDomain: "comunicator-6589e.firebaseapp.com",
  databaseURL: "https://comunicator-6589e.firebaseio.com",
  projectId: "comunicator-6589e",
  storageBucket: "comunicator-6589e.appspot.com",
  messagingSenderId: "579880398180"
};
>>>>>>> 8ff91210385186c9886816ffe2c90f4f51fc9630


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [ 
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule,
<<<<<<< HEAD
    SignupPageModule,
    LoginPageModule
=======
    SignupPageModule
    ,LoginPageModule
>>>>>>> 8ff91210385186c9886816ffe2c90f4f51fc9630
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    ChatProvider,
    StatusBar,
    SplashScreen,
    AngularFireDatabase, 
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
