import React, { useState, useCallback, useRef } from 'react'
import messageAudio from './styles/msg.wav'

import { ChatClient } from './chat-client';

// Websocket URL
const URL = '';

export default function App() {

  const socket = useRef(WebSocket);
  const [isConnected, setIsConnected] = useState(false);
  const [members, setMembers] = useState([]);
  const [chatRows, setChatRows] = useState([]);
  let name;

  const onSocketOpen = useCallback(() => {
    name = prompt('Informe o seu nome')?.trim();
    if (name != null && name != "" && name != undefined) {
      socket.current?.send(JSON.stringify({ action: 'setName', name }));
      setIsConnected(true);
      return
    }
    socket.current?.close();
  }, []);

  const onSocketClose = useCallback(() => {
    setMembers([]);
    setIsConnected(false);
    setChatRows([]);
  }, []);

  const onConnect = useCallback(() => {
    if (socket.current?.readyState !== WebSocket.OPEN) {
      socket.current = new WebSocket(URL);
      socket.current.addEventListener('open', onSocketOpen);
      socket.current.addEventListener('close', onSocketClose);
      socket.current.addEventListener('message', (event) => {
        onSocketMessage(event.data);
      });
    }
  }, []);

  const onDisconnect = useCallback(() => {
    if (isConnected) {
      socket.current?.close();
    }
  }, [isConnected]);

  const sendMessage = useCallback((event) => {
    if (event.key == 'Enter' || event.type == 'click') {
      let message;
      if (event.type == 'keyup') {
        message = event.target.value
        event.target.value = '';
      } else {
        message = event.target.previousSibling.value
        event.target.previousSibling.value = '';
      }

      const destination = event.target.parentElement.firstChild.textContent

      switch (destination) {
        case 'geral':
          if (message !== null && message !== "") {
            socket.current?.send(JSON.stringify({
              action: 'sendPublic',
              message,
            }));
          }
          break
        case 'chatgpt':
          if (message !== null && message !== "") {
            socket.current?.send(JSON.stringify({
              action: 'sendBot',
              message
            }));
          }
          break
      }
    }
  })

  const onSendPrivateMessage = useCallback((to) => {
    const message = prompt(`Mensagem privada para ${to}`)?.trim();
    if (message !== null && message !== "" && to !== name) {
      socket.current?.send(JSON.stringify({
        action: 'sendPrivate',
        message,
        to,
      }));
    }
  }, []);

  const onSocketMessage = useCallback((dataStr) => {
    const data = JSON.parse(dataStr);
    if (data.members) {
      setMembers(data.members);
    } else if (data.publicMessage) {
      setChatRows(oldArray => [...oldArray, <span><b>{data.publicMessage}</b></span>]);
    } else if (data.privateMessage) {
      alert(data.privateMessage);
    } else if (data.systemMessage) {
      setChatRows(oldArray => [...oldArray, <span><i>{data.systemMessage}</i></span>]);
    }
    // ? New message sound effect
    document.getElementById('messageAudio').play()
  }, []);

  return (
    <>
      <ChatClient
        isConnected={isConnected}
        members={members}
        chatRows={chatRows}
        onPrivateMessage={onSendPrivateMessage}
        sendMessage = {sendMessage}
        onConnect={onConnect}
        onDisconnect={onDisconnect}
      />
      <audio id='messageAudio' src={messageAudio}></audio>
    </>
  )
}