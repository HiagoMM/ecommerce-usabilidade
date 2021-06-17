import React from "react";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import { Container, CardImage, Coupon } from "./home.styles";
import { Slider } from "../../components/slider/slider";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { categories, itens, mercados } from "./mocks";
const Home: React.FC = () => {
  const handleClick = (item) => {
    console.log(localStorage.getItem("itens"));
    const itens = JSON.parse(localStorage.getItem("itens") || "[]");
    itens.push(item);
    localStorage.setItem("itens", JSON.stringify(itens));
  };

  return (
    <Container>
      <Header />
      <Banner />
      <Slider
        title="Principais Categorias"
        subTitle="Todas as categorias"
        cols={5}
        itens={categories.map((cat, index) => (
          <div className="card-1" key={index}>
            <img draggable="false" src={cat.img} alt="img-slider" />
          </div>
        ))}
      />
      <Slider
        title="Mercados em destaque"
        subTitle="Todos os mercados"
        cols={3}
        itens={mercados.map((mer, index) => (
          <CardImage
            className="card-1 fixed-length"
            key={index}
            image={mer.img}
            height="30rem"
            cover
          ></CardImage>
        ))}
      />

      <Slider
        title="Ofertas especiais"
        subTitle="Ver todos"
        cols={6}
        itens={itens.map((item, index) => (
          <Coupon elevation={3} key={index}>
            <CardImage key={index} image={item.img} height="10rem" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <Button
              startIcon={<ShoppingCartIcon />}
              size="large"
              color="primary"
              variant="contained"
              className="button"
              onClick={() => handleClick(item)}
            >
              Adicionar
            </Button>
          </Coupon>
        ))}
      />
      <Slider
        title="Promoções Da Semana"
        subTitle="Ver todos"
        cols={6}
        itens={itens
          .sort(() => Math.random() - 0.5)
          .map((item, index) => (
            <Coupon elevation={3} key={index}>
              <CardImage key={index} image={item.img} height="10rem" />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <Button
                startIcon={<ShoppingCartIcon />}
                size="large"
                color="primary"
                variant="contained"
                className="button"
              >
                Adicionar
              </Button>
            </Coupon>
          ))}
      />
    </Container>
  );
};

export default Home;
