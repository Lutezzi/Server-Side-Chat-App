// public/script.js
const socket = io();
const username = localStorage.getItem('username') || "Bilinmeyen";

document.getElementById('messageInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const input = document.getElementById('messageInput');
  const msg = input.value.trim();
  if (msg !== "") {
    socket.emit('chat message', `${username}: ${msg}`);
    input.value = '';
  }
}

socket.on('chat message', function (msg) {
  const li = document.createElement('li');
  li.textContent = msg;
  document.getElementById('messages').appendChild(li);
});
