import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Paper, Button } from "@material-ui/core";
import { Item } from "./banner.styles";

const Banner: React.FC = () => {
  const items = [
    "https://s3.amazonaws.com/redecomprasdelivery.com.br/files/banner_imagens/BET-BANNER-SAO-JOAO-PRODUTOS-1200x400px-9447.jpg",
    "https://s3.amazonaws.com/redecomprasdelivery.com.br/files/banner_imagens/Bom-todo.jpg",
    "https://s3.amazonaws.com/redecomprasdelivery.com.br/files/banner_imagens/maggi-1200.jpg",
  ];
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      emulateTouch
      infiniteLoop
    >
      {items.map((link, index) => (
        <Item key={index} link={link}>
          {/* <Paper className="offer">
            <div className="title-text">
              <h1>20% OFF</h1>
              <p>Na compra de qualquer gato</p>
            </div>
            <Button color="inherit" size="large" variant="outlined">
              Comprar
            </Button>
          </Paper> */}
        </Item>
      ))}
    </Carousel>
  );
};

export default Banner;
