import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1pt solid #0002;
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  background: white;
  #logo {
    padding-right: 4rem;
    width: 1rem;
    flex: 0.4;
  }
  .cart-button {
    padding: 12px;
    border-radius: 10px;
    color: rgba(0, 0, 0, 0.54);
    p {
      margin-left: 10px;
    }
  }
  .btn-margin {
    margin: 0 0.1rem;
  }
  .support-number {
    flex: 1.4;
    text-align: end;
    .center {
      width: 70%;
      margin: 0 auto;
    }
    h6 {
      margin-bottom: -10px;
      font-weight: bold;
    }
  }
  .icons {
    flex: 1.5;
    display: flex;
    justify-content: center;
    font-size: 1;
    height: 3rem;
    span {
      font-weight: bold;
    }
  }
`;

export const CategoriesContainer = styled.div`
  height: 2.7rem;
  margin: 0.7rem 4rem;
  display: flex;
  background: white;
  justify-content: space-between;
  button {
    height: 100%;
    margin: 0 1rem;
  }
  #all-cat {
    margin: 0;
    margin-right: 3rem;
  }
`;
