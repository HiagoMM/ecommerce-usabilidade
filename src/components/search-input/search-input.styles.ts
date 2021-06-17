import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 5px;
  height: 2rem;
  background-color: #ececec;
  border-radius: 10px;
  align-items: center;
  flex: 4;
  .input {
    flex: 5;
    padding-left: 10px;
  }
  #menu-logo {
    margin-left: 10px;
  }
  .divider {
    height: 60%;
    margin: 0 5px;
  }
  .button {
    flex: 1;
    height: 100%;
    padding: 0 8px;
    color: rgba(0, 0, 0, 0.54);
  }
`;
export const Categorias = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  button {
    text-transform: capitalize !important;
  }
`;
