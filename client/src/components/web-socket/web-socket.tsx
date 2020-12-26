import { Component, h } from '@stencil/core';

@Component({
  tag: 'web-socket',
  styleUrl: 'web-socket.css',
  shadow: true,
})
export class WebSocket {

  render() {
    return (
      <div class="container">
        <div class="row">
          <h1>
            Bienvenue sur la page web socket
          </h1>
        </div>
      </div>
    );
  }

}
