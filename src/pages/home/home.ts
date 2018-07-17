
import { NavController , Content } from 'ionic-angular';
import { Component, NgZone, ViewChild } from '@angular/core';
import { ChatProvider } from '../../providers/chat/chat';
import { UserServiceProvider } from '../../providers/user-service/user-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;
   nickname = this.userService.getUser().nickname;
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

      constructor(
        public navCtrl: NavController, 
        private chatProvider: ChatProvider, 
        private zone: NgZone,
        private userService: UserServiceProvider) 
        { 

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
      sendDate: Date(), 
      message: this.model.message, 
      user: this.userService.getUser().nickname 
    } 
    this.chatProvider.saveMessage(message).then(() => { 
      
    })
  }
}

