import { Component, Injector, OnInit } from '@angular/core';
import { Events, Platform } from '@ionic/angular';
import { User } from '../services/user-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss']
})
export class TabsPage implements OnInit {
  public user: User;
  protected events: Events;
  
  constructor(
    public platform: Platform,
    injector: Injector
    ) {
    
    this.events = injector.get(Events);
  }


  ngOnInit() {
    this.user = User.getCurrent();

    this.events.subscribe('user:login', () => {
      this.user = User.getCurrent();
    });

    this.events.subscribe('user:loggedOut', () => {
      this.user = null;
    });
  }
}
