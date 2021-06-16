import React from "react";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import { Container } from "./home.styles";
import { Slider } from "../../components/slider/slider";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Slider
        title="Principais Categorias"
        subTitle="Todas as categorias"
        cols={8}
        itens={[]}
      />
      <Slider
        title="Mercados em destaque"
        subTitle="Todos os mercados"
        cols={4}
        itens={[]}
      />
    </Container>
  );
};

export default Home;
