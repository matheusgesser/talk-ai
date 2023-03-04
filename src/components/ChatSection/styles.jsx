import styled from "styled-components";

export const Section = styled.section`
  border-radius: 0 16px 16px 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem;
  @media (max-width:800px) {
    width: 100%;
  }
`

export const MessagesFeed = styled.section`
  overflow: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #222222 #888888;
  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-track {
    background: #888888;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #222222;
    border-radius: 16px;
    border: 2px solid #888888;
  }
  margin-bottom: 0.5rem;
`

export const Message = styled.article`
  margin-bottom: 1rem;
`

export const MessageText = styled.p`
  display: inline-block;
  color: #fff;
  padding: 1rem;
  background: #222;
  border-radius: 10px 10px 10px 2px;
  font-family: 'Orienta', sans-serif;
  font-size: 1.5rem;
  word-break: normal;
`

export const Inputs = styled.section`
  width: 100%;
  display: flex;
`

export const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  border: none;
  &:active,
  &:focus {
    border: none;
    outline: none;
  }
  @media (max-width:800px) {
    width: 500%;
    margin: 0;
  }
`

export const Buttons = styled.section`
  width: 100%;
  display: flex;
  gap: 1rem;
  @media (max-width:800px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const Button = styled.button`
  text-transform: uppercase;
  padding: 1rem 2.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #000;
  box-shadow: #555 0 6px 0px;
  color: #fff;
  font-size: 0.8rem;
  font-family: 'Roboto Mono', monospace;
  transition: all 50ms;
  @media (max-width:800px) {
    width: 100%;
    margin: 0;
  }
  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }
`