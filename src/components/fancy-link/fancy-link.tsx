import styled from "styled-components";

export const FancyLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  font-weight: bold;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    height: 0.07em;
    width: 100%;
    border-radius: 10rem;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 250ms ease;
  }
  &:hover :before,
  &:focus :before {
    outline: none;
    transform: scaleX(1);
  }
`;
