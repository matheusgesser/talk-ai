import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import UsersSection from '../components/UsersSection'
import ChatSection from '../components/ChatSection'

export const ChatClient = ({ isConnected, members, chatRows, onPrivateMessage, sendMessage, onConnect, onDisconnect }) => {
  const [showAside, setShowAside] = React.useState(false)

  function toggleAside() {
    setShowAside(prev => !prev)
  }

  return (
    <Container>
      <ToggleAsideButton onClick={() => toggleAside()} showAside={showAside}>
        {showAside ? '<' : '>'}
      </ToggleAsideButton>
      <UsersSection
        isConnected={isConnected}
        showAside={showAside}
        closeAside={toggleAside}
        members={members}
        onPrivateMessage={onPrivateMessage}
      />
      <ChatSection
        isConnected={isConnected}
        chatRows={chatRows}
        // onPublicMessage={onPublicMessage}
        // onBotMessage={onBotMessage}
        sendMessage={sendMessage}
        onConnect={onConnect}
        onDisconnect={onDisconnect}
      />
    </Container>
  )
}

const Container = styled.main`
  width: 90vw;
  height: 90vh;
  display: flex;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  position: relative;
  overflow: hidden;
`

const ToggleAsideButton = styled.button`
  font-family: monospace;
  font-size: 2rem;
  padding: 2rem 1rem;
  position: absolute;
  top: 10%;
  border: none;
  border-radius: 0 16px 16px 0;
  background: #000000dd;
  backdrop-filter: blur(20px) brightness(500%);
  color: #fff;
  cursor: pointer;
  left: ${props => props.showAside ? '80%' : '0'};
  @media (min-width:1200px) {
    display:none;
  }
`