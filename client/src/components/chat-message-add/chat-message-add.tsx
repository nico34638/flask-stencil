import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { initiateSocket,sendMessage, disconnectSocket} from "../Socket"

@Component({
  tag: 'chat-message-add',
  styleUrl: 'chat-message-add.css',
  shadow: true,
})
export class ChatMessageAdd {

  @State() message: string;


  @Event() sendMessage: EventEmitter<string>;
  
  componentWillLoad() {
    initiateSocket("trest")
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.message);
    sendMessage({
      "username": "test",
      "message": this.message
    })
    this.sendMessage.emit("true")
  }

  handleChange(event) {
    this.message = event.target.value;
  }

  disconnectedCallback() {
    disconnectSocket();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
              <div class="form-group">
                  <label>Message : </label>
                  <input type="text" class="form-control" onInput={(event) => this.handleChange(event)}/>
              </div>
              <button type="submit" class="btn btn-primary">Envoyer</button>
      </form> 
    )
  }

}
