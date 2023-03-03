import React, { useState, useCallback, useRef } from 'react'

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

  return (
    <>
      <ChatClient
        isConnected={isConnected}
        members={members}
        chatRows={chatRows}
      />
    </>
  )
}