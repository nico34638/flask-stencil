import { Component, h, State } from '@stencil/core';
//import { submitMessage } from '../../api/function';
import { initiateSocket, sendMessage, sendPing, sendPong, disconnectSocket } from "../Socket"




@Component({
  tag: 'web-socket',
  styleUrl: 'web-socket.css',
  shadow: true,
})
export class WebSocket {


  @State() socket: {};

  constructor()
  {
    this.envoyer = this.envoyer.bind(this)
    this.ping = this.ping.bind(this)
        this.pong = this.pong.bind(this)

  }

  componentWillLoad() {
    initiateSocket('test bitch')
    console.log(this.socket)
  }

  disconnectedCallback()
  {
    disconnectSocket();
  }

  ping()
  {
    sendPing()
  }

  pong()
  {
    sendPong()
  }



  envoyer()
  {
    console.log("envoyer") 
    sendMessage("bite")
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <h1>
            Bienvenue sur la page web socket
          </h1>

          <button class="btn btn-primary" onClick={this.envoyer}>
            Envoyer
          </button>

          <button class="btn btn-primary" onClick={this.ping}>
            ping
          </button>

          <button class="btn btn-primary" onClick={this.pong}>
            pong
          </button>
        </div>
      </div>
    );
  }

}
