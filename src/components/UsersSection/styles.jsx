import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  border-radius: 16px 0 0 16px;
  width: 20%;
  height: 100%;
  background: #222;
  color: #fff;
  padding: 1rem;
  overflow-x: hidden;
  position: relative;
  left: 0;
  @media (max-width:1200px) {
    position: absolute;
    width: 80%;
    display: ${props => props.showAside ? 'block' : 'none'}
  }

`

export const Header = styled.section`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #333;
  padding: 2rem 0;
  border-radius: 50px;
`

export const Title = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: .8vw;
  opacity: .7;
  margin-top: 0.5rem;
  text-align: center;
  & a {
    opacity: 1;
    color: #fff;
  }
  @media (max-width:1200px) {
    font-size: 1rem;
  }
`

export const SubTitle = styled.h4`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8vw;
  opacity: 0.5;
  text-align: center;
  margin-top: 1.5rem;
  @media (max-width:1200px) {
    font-size: .8rem;
    margin-bottom: 0.5rem;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ListItem = styled.li`
  position: relative;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-align: center;
`

export const ListItemText = styled.strong`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.4vw;
  word-wrap: break-word;
  text-align: center;
  padding: 0.25rem 0;
  position: relative;
  cursor: pointer;
  @media (max-width:1200px) {
    font-size: 1.2rem;
  }
  &::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  left: -5px;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  opacity: 0;
  transition: opacity .2s;
  border-color: transparent transparent transparent #fff;
  pointer-events: none;
  }
  &:hover::before,
  &:hover::after {
  opacity: 1;
  }
`