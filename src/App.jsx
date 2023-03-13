import React, { useState, useCallback, useRef } from 'react'
import messageAudio from './assets/msg.wav'
import LogoChatGPT from './assets/chatgpt.svg'
import { ChatClient } from './pages/chat-client';
import Home from './pages/home';

// Websocket URL
const URL = 'wss://m3gcx5rxz4.execute-api.sa-east-1.amazonaws.com/matheusgesser';

export default function App() {

  const socket = useRef(WebSocket);
  const [isConnected, setIsConnected] = useState(false);
  const [members, setMembers] = useState([]);
  const [chatRows, setChatRows] = useState([]);

  const onSocketOpen = useCallback((name) => {
    if (name) {
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

  const onConnect = useCallback((name) => {
    if (socket.current?.readyState !== WebSocket.OPEN) {
      socket.current = new WebSocket(URL);
      socket.current.addEventListener('open', () => onSocketOpen(name));
      socket.current.addEventListener('close', onSocketClose);
      socket.current.addEventListener('message', event => {
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
        message = event.target.value.trim()
        event.target.value = '';
      } else {
        message = event.target.previousSibling.value.trim()
        event.target.previousSibling.value = '';
      }

      const destination = event.target.parentElement.firstChild.textContent

      switch (destination) {
        case 'geral':
          if (message) {
            socket.current?.send(JSON.stringify({
              action: 'sendPublic',
              message,
            }));
          }
          break
        case 'chatgpt':
          if (message) {
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
    if (message) {
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
      console.log(typeof data.publicMessage)
      if (data.publicMessage.includes('gptidentifier#')) {
        data.publicMessage = data.publicMessage.split('#')[1]
        setChatRows(oldArray => [...oldArray, <><img src={LogoChatGPT} width={'25px'} /><span><b>{data.publicMessage}</b></span></>]);
        return
      }
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
      {isConnected
        ? (
          <>
            <ChatClient
              isConnected={isConnected}
              members={members}
              chatRows={chatRows}
              onPrivateMessage={onSendPrivateMessage}
              sendMessage={sendMessage}
              onConnect={onConnect}
              onDisconnect={onDisconnect}
            />
            <audio id='messageAudio' src={messageAudio}></audio>
          </>
        )
        : (
          <Home
            onConnect={onConnect} />
        )
      }

    </>
  )
}