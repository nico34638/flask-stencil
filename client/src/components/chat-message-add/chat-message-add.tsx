import { Component, h } from '@stencil/core';

@Component({
  tag: 'chat-message-add',
  styleUrl: 'chat-message-add.css',
  shadow: true,
})
export class ChatMessageAdd {

  render() {
    return (
      <form method="POST">
              <div class="form-group">
                  <label>Message : </label>
                  <input type="text" class="form-control"/>
              </div>
              <button type="submit" class="btn btn-primary">Envoyer</button>
      </form> 
    )
  }

}
