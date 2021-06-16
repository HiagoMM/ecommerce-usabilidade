import { Button, ButtonBase, IconButton, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import Logo from "../../assets/icon-logo.png";
import SearchInput from "../search-input/search-input";
import { CategoriesContainer, Container } from "./header.styles";
import CasinoIcon from "@material-ui/icons/Casino";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RefreshIcon from "@material-ui/icons/Refresh";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <img src={Logo} alt="logo" id="logo" />
        <SearchInput />
        <div className="support-number">
          <div className="center">
            <Typography variant="h6">08000 40 8004</Typography>
            <Typography>suporte</Typography>
          </div>
        </div>
        <div className="icons">
          <IconButton className="btn-margin">
            <PersonIcon />
          </IconButton>
          <IconButton className="btn-margin">
            <FavoriteBorderIcon />
          </IconButton>
          <ButtonBase className="btn-margin cart-button">
            <ShoppingCartIcon />
            <p>
              Carrinho
              <br /> <span>R$ 3123</span>
            </p>
          </ButtonBase>
        </div>
      </Container>
      <CategoriesContainer>
        <div>
          <Button
            variant="contained"
            color="primary"
            id="all-cat"
            startIcon={<Menu />}
          >
            Comprar por categoria
          </Button>
          <Button startIcon={<CasinoIcon />}>Promoções</Button>
          <Button startIcon={<LocalOfferIcon />}>Preços especiais</Button>
          <Button endIcon={<ExpandMoreIcon />}>Frescos</Button>
          <Button endIcon={<ExpandMoreIcon />}>Congelados</Button>
          <Button endIcon={<ExpandMoreIcon />}>Eletronicos</Button>
          <Button endIcon={<ExpandMoreIcon />}>Livros</Button>
        </div>
        <Button startIcon={<RefreshIcon />}>Visto recentemente</Button>
      </CategoriesContainer>
    </>
  );
};

export default Header;
