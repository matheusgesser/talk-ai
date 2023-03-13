import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import gsap from "gsap"
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Robot from '../components/Robot'

import LogoGitHub from '../assets/github.svg'
import LogoLinkedIn from '../assets/linkedin.svg'

export default function Home({ onConnect }) {

  function handleConnect() {
    const username = document.getElementById('username').value
    if (username) {
      onConnect(username)
    }
  }

  const app = React.createRef()
  const myinput = React.createRef()
  const mybtn = React.createRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({ defaults: { duration: .3, delay: .5 } })
        .from('#ball', { y: '-30%', opacity: '0' })
        .from('#title', { x: '10%', opacity: 0 })
        .from('#robot', { opacity: '0' })
        .from('#subtitle', { opacity: '0', x: '20%' })
        .from(myinput.current, { opacity: '0' })
        .from(mybtn.current, { opacity: '0' })
        .from('#header', { opacity: '0', x: '20%' })
        .from('#footer', { opacity: '0', x: '-20%' })
    }, app)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={app}>
      <Header id='header'>
        <a href="https://github.com/matheusgesser/chat-room" target={'_blank'}>View on GitHub</a>
      </Header>
      <Footer id='footer'>
        <section className="socials">
          <strong>Matheus Gesser</strong>
          <a href="https://www.linkedin.com/in/matheusgesser" target={'_blank'}><img src={LogoLinkedIn} width={'25px'} /></a>
          <a href="https://github.com/matheusgesser" target={'_blank'}><img src={LogoGitHub} width={'30px'} /></a>
        </section>
      </Footer>
      <HomePage>
        <Container>
          <Title id='title'>TalkAI</Title>
          <SubTitle id='subtitle'>Como você gostaria de ser chamado?</SubTitle>
          <Input ref={myinput} id='username' type="text" placeholder=' ' />
          <Button ref={mybtn} type='submit' onClick={handleConnect}>Conectar</Button>
        </Container>

        <Ball id='ball' />
        <Model>
          <Canvas id='robot' className='robot-canvas' dpr={[1, 2]} camera={{ position: [0, 50, 150], fov: 10 }} style={{ cursor: 'grab' }}>
            <Stage environment='city' intensity={0.5}>
              <Robot />
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </Model>

      </HomePage>
    </div>
  )
}

const Model = styled.section`
  width: 40rem;
  height: 50rem;
  @media (max-width:1400px) {
    width: 40rem;
    height: 30rem;
  }
  @media (max-width:650px) {
    width: 100%;
    height: 20rem;
  }
`

const Header = styled.header`
  user-select: none;
  position: fixed;
  right: 2%;
  top: 3%;
  & a {
    color: #fff;
    font-family: 'Roboto Mono', monospace;
  }
  overflow: hidden;
`

const Footer = styled.footer`
  user-select: none;
  position: fixed;
  left: 3%;
  bottom: 2%;
  & section {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  & section strong {
    margin-right: 0.5rem;
    color: #fff;
    font-family: 'Orienta', sans-serif;
    font-size: 1rem;
    overflow: hidden;
  }
`

const HomePage = styled.main`
  user-select: none;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Mono', sans-serif;
  @media (max-width:1350px) {
    flex-direction: column-reverse;
    padding: 0;
  }
  overflow: hidden;
`

const Ball = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  height: 80vw;
  width: 80vw;
  border-radius: 50%;
  background: #ffffff20;
  pointer-events: none;
  @media (max-width:1200px) {
    height: 90vw;
    width: 90vw;
  }
  @media (max-width:600px) {
    height: 110vw;
    width: 110vw;
  }
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  border-radius: 16px;
  @media (max-width: 1000px) {
    padding: 0;
  }
  @media (max-width: 400px) {
    width: 100%;
    padding: 0;
  }
`

const Title = styled.h2`
  text-align: center;
  font-size: 6rem;
  color: #fff;
  margin-bottom: 2rem;
  font-family: 'Dela Gothic One', cursive;
  @media (max-width: 600px) {
    font-size: 20vw;
  }
`

const SubTitle = styled.h4`
  text-align: center;
  font-size: 1rem;
  opacity: 0.8;
  font-family: 'Segoe UI', sans-serif;
  color: var(--color-white);
  word-wrap: break-word;
  padding: 0.5rem 0;
`

const Input = styled.input`
  box-sizing: border-box;
  height: 3rem;
  width: 80%;
  margin: 1rem 0;
  padding: 1rem;
  outline: none;
  border: none;
  border-radius: 25px;
  box-shadow: 0 2px 5px rgba(15, 15, 51, 0.4);
  font-size: 25px;
  text-align: center;
  color: rgba(15, 15, 51, 0.8);
  background-color: #E5E5E5;
  transition: box-shadow .6s;
  transition: height .4s;
  &:hover, :focus {
  box-shadow: 0 5px 5px rgba(15, 15, 51, 0.4);
  }
  &:not(:placeholder-shown) {
  height: 3.5rem;
  }
  @media (max-width:400px) {
    width: 80vw;
  }
`

const Button = styled.button`
  text-transform: uppercase;
  padding: 0.75rem 2.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  background: none;
  border: 1px solid #fff;
  color: #fff;
  font-size: 1.2rem;
  font-family: 'Roboto Mono', monospace;
  transition: background 200ms;
  &:hover {
    background: #ffffff40;
  }
`