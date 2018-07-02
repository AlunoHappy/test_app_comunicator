import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


/* 
Generated class for the UserServiceProvider provider. 
See https://angular.io/guide/dependency-injection for more info on providers and Angular DI. 
*/ 

@Injectable() 
export class UserServiceProvider {
  constructor( 
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth 
  ) { 

  }

  createUser(credentials){ 
    return new Promise<any>((resolve, reject) => { 
      this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword( 
        credentials.email, 
        credentials.password 
      ).then(response => { 
        localStorage.setItem("auth", JSON.stringify(response)); 
        delete credentials.password; 
        var userModel = { 
          ...credentials, 
          uid: response.user.uid 
        } 
        this.db.database.ref("users").push(userModel).then(user => { 
          localStorage.setItem("user", JSON.stringify(userModel));
        }); 
        resolve(userModel);
       }).catch(err => err) 
      })
    }
  }