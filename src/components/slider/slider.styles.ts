import styled from "styled-components";
import Color from "color";
export const Container = styled.div<{ cols: number }>`
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
        transition: 0.3s;
        &:hover {
          background: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) =>
            Color(theme.colors.primary).darken(0.5).string()};
          cursor: pointer;
        }
      }
    }
  }
  .content-wrapper {
    width: 100%;
  }
  .content {
    display: flex;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    --webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    gap: calc(10% / ${(props) => props.cols});
  }
  .item {
    flex: none;
    width: calc(90% / ${(props) => props.cols});

    scroll-snap-align: start;
    user-select: none;
  }
`;
