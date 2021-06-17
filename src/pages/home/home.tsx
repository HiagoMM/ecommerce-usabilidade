import React from "react";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import { Container, CardImage, Coupon } from "./home.styles";
import { Slider } from "../../components/slider/slider";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Home: React.FC = () => {
  const categories = [
    {
      img: "https://static.clubeextra.com.br/img/uploads/1/211/13299211.png?im=Resize,width=304",
    },
    {
      img: "https://static.clubeextra.com.br/img/uploads/1/214/13299214.png?im=Resize,width=304",
    },
    {
      img: "https://static.clubeextra.com.br/img/uploads/1/210/13377210.png?im=Resize,width=304",
    },
    {
      img: "https://static.clubeextra.com.br/img/uploads/1/120/13467120.png?im=Resize,width=304",
    },
    {
      img: "https://static.clubeextra.com.br/img/uploads/1/917/13318917.png?im=Resize,width=304",
    },
    {
      img: "https://static.clubeextra.com.br/img/uploads/1/211/13299211.png?im=Resize,width=304",
    },
    {
      img: "https://static.clubeextra.com.br/img/uploads/1/214/13299214.png?im=Resize,width=304",
    },
    {
      img: "https://static.clubeextra.com.br/img/uploads/1/210/13377210.png?im=Resize,width=304",
    },
    {
      img: "https://static.clubeextra.com.br/img/uploads/1/120/13467120.png?im=Resize,width=304",
    },
    {
      img: "https://static.clubeextra.com.br/img/uploads/1/917/13318917.png?im=Resize,width=304",
    },
  ];

  const mercados = [
    {
      img: "https://www.querotelefonesac0800.com/wp-content/uploads/2020/08/telefone-extra-1.jpg",
    },
    {
      img: "https://saoluisshopping.com/wp-content/uploads/2020/06/21C5CDB7-524E-4DEC-846C-BB9E6DA3BE03.jpeg",
    },
    {
      img: "http://www.mercantilrodrigues.com.br/sites/default/files/image-share.jpg",
    },
  ];
  const itens = [
    {
      name: "Cebola 1 Unidade Aprox. 150g",
      price: "R$ 1,00",
      img: "https://bompreco.vtexassets.com/arquivos/ids/168106-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Tomate Salada 1 Unidade Aprox. 250g",
      price: "R$ 0,50",
      img: "https://bompreco.vtexassets.com/arquivos/ids/161653-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Flocão Novomilho pacote 500g",
      price: "R$ 1,50",
      img: "https://bompreco.vtexassets.com/arquivos/ids/162732-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Abacate 1 Unidade Aprox. 150g",
      price: "R$ 0,25",
      img: "https://bompreco.vtexassets.com/arquivos/ids/161571-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Peito de Frango Congelado",
      price: "R$ 15,00",
      img: "https://bompreco.vtexassets.com/arquivos/ids/161666-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Salsicha1 Unidade Aprox. 150g",
      price: "R$ 5,00",
      img: "https://bompreco.vtexassets.com/arquivos/ids/156116-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Detergente ypê 250ml",
      price: "R$ 2,00",
      img: "https://bompreco.vtexassets.com/arquivos/ids/157729-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Vanish 10x Multipower",
      price: "R$ 5,00",
      img: "https://bompreco.vtexassets.com/arquivos/ids/156072-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Cebola 1 Unidade Aprox. 150g",
      price: "R$ 1,00",
      img: "https://bompreco.vtexassets.com/arquivos/ids/168106-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Tomate Salada 1 Unidade Aprox. 250g",
      price: "R$ 0,50",
      img: "https://bompreco.vtexassets.com/arquivos/ids/161653-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Flocão Novomilho pacote 500g",
      price: "R$ 1,50",
      img: "https://bompreco.vtexassets.com/arquivos/ids/162732-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Abacate 1 Unidade Aprox. 150g",
      price: "R$ 0,25",
      img: "https://bompreco.vtexassets.com/arquivos/ids/161571-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Peito de Frango Congelado",
      price: "R$ 15,00",
      img: "https://bompreco.vtexassets.com/arquivos/ids/161666-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Salsicha1 Unidade Aprox. 150g",
      price: "R$ 5,00",
      img: "https://bompreco.vtexassets.com/arquivos/ids/156116-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Detergente ypê 250ml",
      price: "R$ 2,00",
      img: "https://bompreco.vtexassets.com/arquivos/ids/157729-163-163?width=163&height=163&aspect=true",
    },
    {
      name: "Vanish 10x Multipower",
      price: "R$ 5,00",
      img: "https://bompreco.vtexassets.com/arquivos/ids/156072-163-163?width=163&height=163&aspect=true",
    },
  ];
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
