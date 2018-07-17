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
  createUser(credentials) {
    return new Promise<any>((resolve, _reject) => {
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
        this.db.database.ref("users").push(userModel).then(_user => {
          localStorage.setItem("user", JSON.stringify(userModel));
        });
        resolve(userModel);
      }).catch(err => err)
    })
}
  isLogedIn(): boolean {
    var auth = localStorage.getItem("auth"); 
    return auth != undefined && auth != null; 
}

logout(){ 
  localStorage.removeItem("user"); 
  localStorage.removeItem("auth"); 
  return this.afAuth.auth.signOut(); 
}

login(credentials) {
  return new Promise<any>((resolve, reject) => { 
    this.afAuth.auth.signInWithEmailAndPassword( 
      credentials.username, 
      credentials.password 
    ).then((auth) => { 
      localStorage.setItem("auth", JSON.stringify(auth)); 
      var userFromDatabase = 
      this.db.database.ref("users").orderByChild("uid").equalTo(auth.user.uid).on("child_added", function(user) { 
        var userVal = user.val(); 
        localStorage.setItem("user", JSON.stringify(userVal)); 
        resolve(userVal); 
      }); 
    }).catch(err => { 
      reject(err); 
    }); 
  }) 
}

  getUser(){ 
    var user = localStorage.getItem("user");
    return JSON.parse(user); 
  }
}