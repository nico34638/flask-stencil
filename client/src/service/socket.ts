import io from 'socket.io-client';

let socket;

export const initiateSocket = (data) =>
{
  // @ts-ignore
  socket = io('http://localhost:5000');
  console.log(`Connecting to socket...`);
  if (socket && data)
  {
    socket.emit('init', data);
    socket.on('init', msg =>
    {
      console.log("object")
      console.log(msg)
    })
  }

}

export const disconnectSocket = () =>
{
  console.log('Disconnecting socket...');
  if (socket)
  {
    socket.disconnect();
  }
}

export const subscribeToChat = (cb) =>
{
  if (!socket) return true;
  socket.on('chat', msg =>
  {
    console.log('Websocket event received!');
    return cb(null, msg);
  });
}

export const sendMessage = (message) =>
{
  if (socket)
  {
    socket.emit('add_message', {message});
    socket.on('add_message', msg =>
    {
      console.log(msg)
    })
  }
}

export const sendPing = () =>
{
  console.log('ping')
  if (socket)
  {
    socket.emit('ping', 'ping')
    socket.on('ping', msg =>
    {
      console.log('response', msg)
    })
  }
}

export const sendPong = () =>
{
  console.log('pong')
  if (socket)
  {
    socket.emit('pong', 'pong')
    socket.on('pong', msg =>
    {
      console.log('response', msg)
    })
  }
}

export const receiveMessage = async () => {
  if (socket)
  {
    socket.emit('send_message', 'get_message')
    socket.on('send_message', messages =>
    {
      return messages
    })
  }
}
