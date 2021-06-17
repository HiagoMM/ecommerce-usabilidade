import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const Container = styled.div`
  position: sticky;
  z-index: 1000;
  top: 0px;
  background-color: #fbfbfb;
  border-bottom: 1pt solid #0002;
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  #logo {
    padding-right: 4rem;
    width: 1rem;
    flex: 0.4;
    cursor: pointer;
  }
  .cart-button {
    padding: 12px;
    border-radius: 10px;
    color: rgba(0, 0, 0, 0.54);
    p {
      margin: 0 10px;
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
    justify-content: flex-end;
    font-size: 1;
    height: 3rem;
    span {
      font-weight: bold;
    }
    .shop {
      margin-right: 5px;
    }
  }
`;

export const CategoriesContainer = styled(Paper)`
  position: sticky;
  z-index: 1000;
  top: 90px;

  background-color: #fbfbfb;
  height: 2.7rem;
  padding: 0.7rem 4rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  button {
    height: 100%;
    margin: 0 0.2rem;
    font-size: 0.6rem;
  }
  #all-cat {
    margin: 0;
    margin-right: 3rem;
  }
  .menu-itens {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
`;
