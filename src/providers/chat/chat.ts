import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*

Generated class for the ChatProvider provider. 
See https://angular.io/guide/dependency-injection for more info on providers and Angular DI. 

*/

@Injectable()
export class ChatProvider {

  constructor(
    private db: AngularFireDatabase
  ) {
    console.log('Hello ChatProvider Provider');

  }
  
  getMessages(callback){ 
    console.log("getting messages") 
    return this.db.database.ref("chat").on('value', (resp) => { 
      var messages = []; 
      resp.forEach(childItem => { 
        messages.push({ 
          id: childItem.key, 
          ...childItem.val()
        }) 
      }); 
      callback(messages) 
    }) 
  }

  saveMessage(message){ 
    return new Promise((resolve, reject) => { 
      this.db.database.ref("chat").push(message, (err) => { 
        if (err) { 
          reject(err);
         }
          resolve();
         });
      })
     }
}