import React from 'react';


import Header from "../../components/header/header";
import { Container } from "./carrinho.styles";
import CardCarrinho from "../../components/card-carrinho/cardCarrinho";
import Subtotal from "../../components/subtotal-carrinho/Subtotal";


const Carrinho: React.FC = () => {
    return (
        <Container>
        <Header />
        <div className="box">
        <div className="lista">
        <CardCarrinho />
        <CardCarrinho />
        <CardCarrinho />
        <CardCarrinho />
        </div>
        <div className="subtotal">
            <Subtotal/>
        </div>
        </div>
        </Container>
    );
  };
  
  export default Carrinho;