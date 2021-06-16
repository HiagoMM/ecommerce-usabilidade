import React from 'react';
import {Container} from './Subtotal.styles';
import Button from '@material-ui/core/Button';


const Subtotal: React.FC = () => {
    return (
      <>
        <Container>
            <h2>Subtotal: R$ 1000,00</h2>
            <Button variant="contained" color="primary" disableElevation className="botao">
                Fechar pedido
            </Button>
        </Container>
      </>
    );
  };
  
  export default Subtotal;