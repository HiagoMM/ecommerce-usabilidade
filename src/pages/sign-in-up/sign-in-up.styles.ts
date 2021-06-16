import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const StyledSection = styled.section<{ isRegister: boolean }>`
  @media (max-width: 700px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
  align-items: center;
  transition: 1s ease-in-out 0.2s;
  form {
    width: 70%;
    height: 100%;
    padding: 1rem 0rem;
    overflow-y: auto;
  }
  h1 {
    width: 70%;
    font-size: 3em;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0.5rem;
  }
  .inputs-size {
    display: grid;
    gap: 1rem;
  }
  .buttons-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding-top: 1rem;
  }
`;

export const Wallpaper = styled.div<{ isRegister: boolean }>`
  display: grid;
  place-items: center;
  position: absolute;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background: linear-gradient(90deg, #392fc8 0%, #3567d4 100%);
  z-index: 10;
  transition: 1s ease-in-out;
  height: 100%;
  width: 55vw;
  border-radius: ${(props) =>
    props.isRegister ? "30px 0px 0px 30px" : "0px 30px 30px 0px"};
  transform: ${(props) =>
    props.isRegister ? "translateX(45vw)" : "translateX(0%)"};
  .logo {
    width: 100%;
  }
  .center {
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 100%;

    ${(props) =>
      props.isRegister
        ? css`
            border-radius: 30px 30px 0px 0px;
            transform: translateY(65vh);
            height: 35vh;
          `
        : css`
            height: 65vh;
            border-radius: 0px 0px 30px 30px;
            transform: translateY(0%);
          `};
  }

  svg {
    width: 50%;
    height: 50%;
  }
`;

export const RegisterLayout = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  .full {
    grid-column: 1 / 3;
  }
  overflow: hidden;
`;
