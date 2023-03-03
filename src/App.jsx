import React from 'react'

export default function App() {

  const socket = useRef(WebSocket);
  const [isConnected, setIsConnected] = useState(false);
  const [members, setMembers] = useState([]);
  const [chatRows, setChatRows] = useState([]);
  let name;

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