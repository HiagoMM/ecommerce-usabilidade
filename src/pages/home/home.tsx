import React from "react";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import { Container, CardImage, Coupon } from "./home.styles";
import { Slider } from "../../components/slider/slider";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { categories, itens, mercados } from "./mocks";
import { useState } from "react";
import { useEffect } from "react";
import { useCart } from "../../components/cartContext/cart.context";
const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);
  const [filteredItens, setFilteredItens] = useState([]);
  const { setCartItens, cartItens } = useCart();

  useEffect(() => {
    setFilteredItens(
      itens
        .filter((item) => item.category === category || !category)
        .filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.supplier.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [category, search]);

  const onChangeCategory = (value: string) => {
    setCategory(value);
  };

  const handleClick = (item) => {
    console.log(cartItens);
    setCartItens([...cartItens, item]);
  };

  return (
    <Container>
      <Header
        onChangeSelected={onChangeCategory}
        search={search}
        setSearch={setSearch}
      />
      {!search.length ? (
        <>
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
        </>
      ) : (
        <div className="coupon-grid">
          {filteredItens.map((item, index) => (
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
        </div>
      )}
    </Container>
  );
};

export default Home;
