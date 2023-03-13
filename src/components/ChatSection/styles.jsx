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
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 16px;
  }
  margin-bottom: 0.5rem;
`

export const Message = styled.article`
  margin-bottom: 0.7rem;
  margin-right: 1rem;
`

export const MessageText = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 20px 20px 20px 0px;
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
  background: none;
  border: none;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  color: #fff;
  &:active,
  &:focus {
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
  padding: 1.1rem 2rem;
  border: 1px solid #fff;
  border-radius: 4px;
  cursor: pointer;
  background: none;
  color: #fff;
  font-size: 0.8rem;
  font-family: 'Roboto Mono', monospace;
  transition: all 300ms;
  @media (max-width:800px) {
    width: 100%;
    margin: 0;
  }
  &:hover {
    background: #ffffff50;
  }
`