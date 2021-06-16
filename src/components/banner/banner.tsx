import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Paper, Button } from "@material-ui/core";
import { Item } from "./banner.styles";

const Banner: React.FC = () => {
  const items = [
    "https://lorempixel.com/1920/800/cats/1",
    "https://lorempixel.com/1920/800/cats/2",
    "https://lorempixel.com/1920/800/cats/3",
    "https://lorempixel.com/1920/800/cats/4",
    "https://lorempixel.com/1920/800/cats/5",
  ];
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      emulateTouch
    >
      {items.map((link, index) => (
        <Item key={index} link={link}>
          <Paper className="offer">
            <div className="title-text">
              <h1>20% OFF</h1>
              <p>Na compra de qualquer gato</p>
            </div>
            <Button color="inherit" size="large" variant="outlined">
              Comprar
            </Button>
          </Paper>
        </Item>
      ))}
    </Carousel>
  );
};

export default Banner;
