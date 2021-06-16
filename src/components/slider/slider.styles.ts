import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 4rem;
  .title-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .title {
      display: flex;
      align-items: flex-end;
      span {
        margin-left: 2rem;
        margin-bottom: 1.66rem;
        font-size: 0.8rem;
        color: #989898;
      }
      svg {
        margin-bottom: 1.66rem;
        margin-left: 0.2rem;
        color: #989898;
        font-size: 0.8rem;
      }
    }
    .arrows {
      margin-bottom: 1.66rem;
      display: flex;
      .arrow {
        font-size: 0.5rem;
        display: grid;
        place-items: center;
        background: #989898;
        color: #565656;
        border-radius: 8px;
        padding: 0.3em;
        margin: 0 0.4rem;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
