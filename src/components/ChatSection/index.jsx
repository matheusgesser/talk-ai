import React from 'react';

import { Section, Buttons, Inputs, Input, Button, MessagesFeed, Message, MessageText } from './styles'
import SendIcon from '../../assets/sendicon.svg'

export default function ChatSection({ isConnected, chatRows, sendMessage, onConnect, onDisconnect }) {

  const feedEndRef = React.useRef(null);

  // ? Toggles message destination (global | chatgpt)
  const [messageToBot, setMessageToBot] = React.useState(false)
  function toggleMessageToBot() {
    setMessageToBot(prev => !prev)
  }

  React.useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatRows])

  return (
    <Section>
      <Buttons>
        {isConnected &&
          <Inputs>
            <Button style={{ minWidth: '5.5rem', borderRadius: '4px 0 0 4px', padding: '0.5rem 1rem', boxShadow: 'none' }} onClick={toggleMessageToBot}>
              {messageToBot ? 'chatgpt' : 'geral'}
            </Button>
            <Input onKeyUp={() => { sendMessage(event) }} style={{ marginRight: 'auto' }}></Input>
            <Button onClick={() => { sendMessage(event) }} style={{ borderRadius: '0 4px 4px 0', padding: '0.5rem 1rem', boxShadow: 'none' }}>
              <img src={SendIcon} style={{ pointerEvents: 'none' }} />
            </Button>
          </Inputs>
        }
        {isConnected && <Button style={{ marginBottom: '3px' }} onClick={onDisconnect}>Desconectar</Button>}
      </Buttons>
      <MessagesFeed>
        {chatRows.map((item, i) =>
          <Message key={i}>
            <MessageText>{item}</MessageText>
          </Message>
        )}
        <div ref={feedEndRef}></div>
      </MessagesFeed>
    </Section>
  )
}