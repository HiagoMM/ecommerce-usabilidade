import styled from "styled-components";

export const Item = styled.div<{ link: string }>`
  background-image: url(${({ link }) => link});
  height: 30rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 4rem;
  .offer {
    background-color: ${({ theme }) => theme.colors.primary}d9;
    height: 60%;
    width: 20%;
    color: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title-text {
      text-align: left;
      h1 {
        font-size: 3rem;
      }
    }
  }
`;
