
import { NavController , Content } from 'ionic-angular';
import { Component, NgZone, ViewChild } from '@angular/core';
import { ChatProvider } from '../../providers/chat/chat';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;
    nickname = "eu"; 
    mychats = [
      { 
        sendDate: new Date(),
        message: "Olá tudo bem?", 
        user: "eu" 
      }, 
      { 
        sendDate: new Date(),
        message: "Estou bem sim?",
        user: "voce" 
      }
    ]

    public model = {
       message: "" 
      };

  constructor(public navCtrl: NavController, private chatProvider: ChatProvider, private zone: NgZone) {

  }
  scrollToTop(){ 
    setTimeout(() => { 
      this.content.scrollToBottom(300); 
    }, 100); 
  }

  ionViewDidEnter(){ 
    this.chatProvider.getMessages((messages) => { 
      this.zone.run(() =>{ 
        this.mychats = messages; 
        this.scrollToTop();
      });
   })
 }
  sendMessage(){ 
    var message = { 
      sendDate: new Date(), 
      message: this.model.message, 
      user: "eu" 
    } 
    this.chatProvider.saveMessage(message).then(() => { 
      this.mychats.push(message);
    })
 }
}

