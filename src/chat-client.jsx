import React from 'react';
import styled from 'styled-components';

export const ChatClient = ({ isConnected, members, chatRows, onPrivateMessage, sendMessage, onConnect, onDisconnect }) => {
  return (
    <Container>
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