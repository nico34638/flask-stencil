import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-message',
  styleUrl: 'chat-message.css',
  shadow: true,
})
export class ChatMessage {

  @Prop() message: string;

  render() {
    return (
      <div class="message">
        <p>{ this.message }</p>
      </div>
    );
  }

}
