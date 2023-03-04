import React from 'react';
import styled from 'styled-components';

import UsersSection from './components/UsersSection'

export const ChatClient = ({ isConnected, members, chatRows, onPrivateMessage, sendMessage, onConnect, onDisconnect }) => {
  const [ showAside, setShowAside ] = React.useState(false)

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
`

const ToggleAsideButton = styled.button`
  font-family: monospace;
  font-size: 2rem;
  padding: 2rem 1rem;
  position: absolute;
  top: 10%;
  border: none;
  border-radius: 0 16px 16px 0;
  background: #222;
  color: #fff;
  cursor: pointer;
  left: ${props => props.showAside ? '80%' : '0'};
  @media (min-width:1200px) {
    display:none;
  }
`