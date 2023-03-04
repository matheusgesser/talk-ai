import React from 'react';

import { Aside, Header, Title, SubTitle, List, ListItem, ListItemText } from './styles'

import LogoDIO from '../LogoDIO'
import LogoAWS from '../LogoAWS'

export default function UsersSection({ isConnected, members, onPrivateMessage, showAside }) {
  return (
    <Aside showAside={showAside}>
      <Header>
        <LogoDIO/>
        <LogoAWS/>
      </Header>

      <Title>Feito com &#10084;&#65039; por<br/> <a href="https://linktr.ee/matheusgesser" target={'_blank'}>Matheus Gesser</a></Title>
      {isConnected && <SubTitle>Participantes</SubTitle>}

      <List>
        {members.map(item =>
          <ListItem key={item} onClick={() => {{onPrivateMessage(item)};}}>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        )}
      </List>
    </Aside>
  )
}