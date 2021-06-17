import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  min-height: 50vh;
  .left {
    padding: 1rem;
    width: 75%;
    .center-loading {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
    }
    .card-select {
      display: grid;
      grid-template-columns: 1fr 1fr 9fr;
      margin: 10px 0px;
      border-radius: 10px;
      .center {
        display: grid;
        place-items: center;
      }
      img {
        width: 4rem;
      }
      .divider {
        grid-column: 1 / 4;
        margin-top: 1rem;
        width: 100%;
      }
    }
    .title {
      font-weight: bold;
    }
    .item {
      display: grid;
      align-items: center;
      justify-items: flex-start;
      gap: 1rem;
      grid-template-columns: 1fr 9fr 1fr 2fr 1fr 1fr;
      padding: 1rem 0rem;
      p {
        font-size: 1.1rem;
      }
      img {
        width: 5rem;
      }

      .divider {
        grid-column: 1 / 7;
        margin-top: 1rem;
        width: 100%;
      }
      .cancel {
        fill: #9e1717;
        cursor: pointer;
      }
    }
  }
  .right {
    width: 20%;
    padding: 1rem;
    max-height: 32rem;
    position: sticky;
    top: 1rem;
    .button {
      width: 100%;
      margin-top: 3rem;
    }
    h3,
    h4 {
      margin: 0.5rem 0rem;
      font-weight: normal;
      color: #3e3e3e;
    }
    .red {
      color: #9e1717;
    }
    .prices {
      display: grid;
      color: black;
      grid-template-columns: 1fr 1fr;
      .divider {
        grid-column: 1 / 3;
        margin: 1rem 0rem;
      }
      h4 {
        text-align: end;
      }
    }
  }
`;
