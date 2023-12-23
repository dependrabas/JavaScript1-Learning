const socket = new WebSocket('ws://example.com');

socket.addEventListener('open', (event) => {
  socket.send('Hello Server!');
});

socket.addEventListener('message', (event) => {
  console.log('Received:', event.data);
});
