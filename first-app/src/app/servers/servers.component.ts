import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', attribute
  //selector: '.app-servers', class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'no server was created!';
  serverName = 'testing';
  userCreated = false;
  userName = '';
  usersList = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus =
      'A new server has been successfully added. The name of the server is ' +
      this.serverName +
      'server';
  }
  onUserCreated() {
    this.userCreated = true;
    this.usersList.push(this.userName);
  }

  // onUpdateServerName(event: any) {
  //  this.serverName = (<HTMLInputElement>event.target).value;
  //}
}
