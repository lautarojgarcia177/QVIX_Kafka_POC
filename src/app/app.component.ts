import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Client {clientId: number; clientDescription: string; }

interface Channel {channelId: number; channelDescription: string; }

interface Program {programId: number; programDescription: string; }

interface QvixEvent { client: Client; channel: Channel; program: Program; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  randomData: Array<QvixEvent> = [];

  clients: Client[] = [];
  channels: Channel[] = [];
  programs: Program[] = [];

  constructor(private http: HttpClient) {
    this.populateData(100000);
  }

  private populateData(dataLength: number) {
    for (let i = 0; i < 1000; i++) {
      const client: Client = {
        clientId: i,
        clientDescription: getRandomString(10)
      };
      this.clients.push(client);
    }
    for (let i = 0; i < 100; i++) {
      const channel: Channel = {
        channelId: i,
        channelDescription: getRandomString(10)
      };
      this.channels.push(channel);
    }
    for (let i = 0; i < 500; i++) {
      const program: Program = {
        programId: i,
        programDescription: getRandomString(10)
      };
      this.programs.push(program);
    }
    for (let i = 0; i < dataLength; i++) {
      const event: QvixEvent = {
        client: random_item(this.clients),
        channel: random_item(this.channels),
        program: random_item(this.programs)
      };
      this.randomData.push(event);
    }
    console.log(this.randomData);
  }
}

function getRandomString(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

function random_item(items: Array<any>)
{
return items[Math.floor(Math.random() * items.length)];
}
