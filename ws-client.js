import {  input , number} from "@inquirer/prompts"
import chalk from 'chalk'

// Creates a new WebSocket connection to the specified URL.
const socket = new WebSocket('ws://localhost:8080');

// Executes when the connection is successfully established.
socket.addEventListener('open', async event => {
  // Sends a message to the WebSocket server.

  let player = await input({ message: chalk.yellow("Digite seu novo nome:") })
  socket.send(JSON.stringify({player}));
});

// Listen for messages and executes when a message is received from the server.
socket.addEventListener('message', event => {
  
  const response = JSON.parse(event.data)

  if(response.message === 'Nome registrado'){
    const guess = number({ message: chalk.yellow("Digite um número:") })

    socket.send(JSON.stringify({guess}))
  }

  if(response.playerWon !== undefined){
    if (response.playerWon){
      console.log('voce venceu')
    }else{
      console.log('errou, tente de novo')
    }
  }

});

// Executes when the connection is closed, providing the close code and reason.
socket.addEventListener('close', event => {
  console.log('WebSocket connection closed:', event.code, event.reason);
});

// Executes if an error occurs during the WebSocket communication.
socket.addEventListener('error', error => {
  console.error('WebSocket error:', error);
});
