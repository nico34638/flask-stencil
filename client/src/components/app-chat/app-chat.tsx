import { Component, h, Listen, State } from '@stencil/core';
import { Message } from '../../model/message';

@Component({
  tag: 'app-chat',
  styleUrl: 'app-chat.css',
  shadow: true,
})
export class AppChat
{

  @State() messages: Array<Message> = [];

  constructor()
  {
    this.onClickDeleteAllMessage = this.onClickDeleteAllMessage.bind(this);
  }

  componentWillLoad()
  {
    if (this.messages.length == 0)
    {
      this.fetchMessage();
    }
  }

  @Listen('sendMessage')
  sendMessHandler()
  {
    this.fetchMessage();
  }

  async fetchMessage()
  {
    const headers = new Headers();

    const param = {
      method: 'GET',
      headers: headers
    };

    return await fetch('http://localhost:5000/messages', param)
      .then(response => response.json())
      .then((result) =>
      {
        this.messages = result
        console.log(this.messages)
      });
  }

  async deleteAllMessages()
  {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const param = {
      method: 'POST',
      headers: headers
    };

    return await fetch('http://localhost:5000/messages/delete', param)
      .then(response => response.json())
      .then((result) =>
      {
        console.log(result)
      });
  }

  onClickDeleteAllMessage()
  {
    console.log("delete")
    this.deleteAllMessages();
    this.fetchMessage();
  }

  test()
  {
    console.log("test")
  }

  render()
  {
    return (
      <div class="container">
        <div class="row">
          <div class="chat">

            <div class="col-md-4 btn-reset">
              <button class="btn btn-primary" type="submit" onClick={this.onClickDeleteAllMessage}>Supprimer tous les messages</button>
            </div>

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
