import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
      emulateTouch
      infiniteLoop
    >
      {items.map((link, index) => (
        <Item key={index} link={link}></Item>
      ))}
    </Carousel>
  );
};

export default Banner;
