import React from "react";
import Header from "../../components/header/header";

import { Container } from "./cart.styles";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  IconButton,
  Paper,
  Radio,
} from "@material-ui/core";
import { useCart } from "../../components/cartContext/cart.context";
import { useMemo, useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import CancelIcon from "@material-ui/icons/Cancel";
import { parseNumber } from "../../utils/functions";
import { ArrowBackIos } from "@material-ui/icons";
import { cards } from "../home/mocks";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
const Cart: React.FC = () => {
  const { cartItens, setCartItens, getTotalPrice } = useCart();
  const [paymentMode, setPaymentMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const realItens = useMemo(() => {
    const itens = [];
    cartItens.forEach((item) => {
      const index = itens.findIndex((sItem) => sItem.name === item.name);

      if (index !== -1) {
        itens[index] = { ...itens[index], qtd: itens[index].qtd + 1 };
      } else {
        itens.push({ ...item, qtd: 1 });
      }
    });
    return itens;
  }, [cartItens]);

  const handleIncrement = (item) => {
    setCartItens([...cartItens, item]);
  };
  const handleDecrement = (item) => {
    const index = cartItens.findIndex((cItem) => cItem.name === item.name);
    const itens = [...cartItens];
    itens.splice(index, 1);
    setCartItens(itens);
  };
  const handleDelete = (item) => {
    setCartItens(cartItens.filter((cItem) => cItem.name !== item.name));
  };

  const handleClick = () => {
    setPaymentMode(true);
    if (paymentMode) {
      Swal.fire(
        "Compra efetuada com sucesso!!",
        "Entrega prevista para o dia 19/06/2021",
        "success"
      ).then(() => {
        setCartItens([]);
        history.push("/home");
      });
    }
  };

  return (
    <>
      <Header onChangeSelected={() => {}} search={""} setSearch={() => {}} />
      <Container>
        {!paymentMode ? (
          <Paper className="left">
            {loading ? (
              <div className="center-loading">
                <CircularProgress />
              </div>
            ) : (
              <>
                <div className="item title">
                  <p></p>
                  <p>Descrição</p>
                  <p>Valor</p>
                  <p>Quantidade</p>
                  <p>Total</p>
                  <p></p>
                  <Divider className="divider" />
                </div>
                {realItens.map((item, index) => (
                  <div className="item" key={index}>
                    <img src={item.img} alt="img" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <ButtonGroup variant="contained" color="primary">
                      <Button onClick={() => handleDecrement(item)}>-</Button>
                      <Button>{item.qtd}</Button>
                      <Button onClick={() => handleIncrement(item)}>+</Button>
                    </ButtonGroup>
                    <p>R$ {(parseNumber(item.price) * item.qtd).toFixed(2)}</p>
                    <IconButton onClick={() => handleDelete(item)}>
                      <CancelIcon className="cancel" />
                    </IconButton>
                    {index !== realItens.length - 1 && (
                      <Divider className="divider" />
                    )}
                  </div>
                ))}
              </>
            )}
          </Paper>
        ) : (
          <>
            <Paper className="left">
              <Button
                startIcon={<ArrowBackIos />}
                onClick={() => setPaymentMode(false)}
              >
                Voltar
              </Button>
              {cards.map((card, index) => (
                <div className="card-select" key={index}>
                  <div className="center">
                    <Radio color="primary" />
                  </div>
                  <img src={card.img} alt="" />
                  <h4>{card.desc}</h4>
                  {index !== cards.length - 1 && (
                    <Divider className="divider" />
                  )}
                </div>
              ))}
            </Paper>
          </>
        )}
        <Paper className="right">
          <h1>Resumo</h1>
          <div className="prices">
            <h3>Subtotal</h3>
            <h4>R$ {getTotalPrice}</h4>
            <h3>Taxa de entrega</h3>
            <h4>R$ 10.00</h4>
            <h3 className="red">Desconto</h3>
            <h4 className="red">R$ -5.00</h4>
            <Divider className="divider" />
            <h3>Total</h3>
            <h4>R$ {(Number(getTotalPrice) + 5).toFixed(2)}</h4>
          </div>
          <h1>Entrega</h1>
          <h4>Rua Radialista Geraldo Rodrigues,100 - Jardim Continental </h4>
          <h3 className="red">Previsto para - 19/06/2021</h3>

          <Button
            color="primary"
            size="large"
            variant="contained"
            className="button"
            onClick={() => handleClick()}
          >
            {paymentMode ? "Finalizar" : "Continuar"}
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Cart;
