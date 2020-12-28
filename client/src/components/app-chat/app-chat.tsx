import {Component, h, State, Method, Listen} from '@stencil/core';
import {Message} from '../../model/message';

@Component({
  tag: 'app-chat',
  styleUrl: 'app-chat.css',
  shadow: true,
})
export class AppChat {

  @State() messages: Array<Message> = [];

  componentWillLoad() {
    if (this.messages.length == 0) {
      this.fetchMessage()
    }
  }

  @Listen('sendMessage')
  sendMessHander() {
    this.fetchMessage();
  }

  @Method()
  async fetchMessage() {
    const headers = new Headers();

    const param = {
      method: 'GET',
      headers: headers
    };

    return await fetch('http://localhost:5000/messages', param)
      .then(response => response.json())
      .then((result) => {
        this.messages = result
        console.log(this.messages)
      });
  }

  render() {
    {
      console.log("render")
    }
    return (
      <div class="container">
        <div class="row">
          <div class="chat">

            {this.messages.map((todo) =>
              <div>
                <chat-message message={todo.message}/>
              </div>
            )}

            <chat-message-add/>
          </div>
        </div>
      </div>
    );
  }

}
