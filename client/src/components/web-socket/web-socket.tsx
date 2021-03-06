import { Component, h, State } from '@stencil/core';
import { disconnectSocket, initiateSocket, sendPong, sendPing, sendMessage } from '../../service/socket'

@Component({
  tag: 'web-socket',
  styleUrl: 'web-socket.css',
  shadow: true,
})

export class WebSocket
{

  @State() socket: {};

  constructor()
  {
    this.envoyer = this.envoyer.bind(this)
    this.ping = this.ping.bind(this)
    this.pong = this.pong.bind(this)
  }

  componentWillLoad()
  {
    initiateSocket('init socket')
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

  render()
  {
    return (
      <div class="container">
        <div class="row">
          <h1 class="display-1"> Bienvenue sur la page web socket</h1>
        </div>
        <div class="row">


          <div class="row">
            <div class="col-md-4">
              <button class="btn btn-primary" onClick={this.envoyer}>
                Envoyer
              </button>
            </div>

            <div class="col-md-4">
              <button class="btn btn-primary" onClick={this.ping}>
                ping
              </button>
            </div>

            <div class="col-md-4">
              <button class="btn btn-primary" onClick={this.pong}>
                pong
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
