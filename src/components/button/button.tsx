import styled from "styled-components";

const ButtonBase = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.25em;
  padding: 0.3em 0.6em 0.4em;
  position: relative;
  z-index: 0;
  overflow: hidden;
  cursor: pointer;
  transition: color 300ms ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    outline: none;
  }

  &:active {
    transform: scale(1.01);
  }

  &:after {
    background-color: ${({ theme }) => theme.colors.white};
    content: "";
    position: absolute;
    top: 0.08em;
    left: 0.08em;
    bottom: 0.08em;
    right: 0.08em;
    z-index: -2;
    border-radius: 0.2em;
  }

  &:before {
    background-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    content: "";
    z-index: -1;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    transition: transform 200ms ease-out;
    border-radius: 0.16em;
    transform-origin: right;
    transform: scaleX(0);
  }

  &:hover :before,
  &:focus :before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
export const Button = ButtonBase;
