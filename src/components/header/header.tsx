import { Badge, Button, ButtonBase, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import CasinoIcon from "@material-ui/icons/Casino";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PersonIcon from "@material-ui/icons/Person";
import RefreshIcon from "@material-ui/icons/Refresh";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/icon-logo.png";
import { useCart } from "../cartContext/cart.context";
import SearchInput from "../search-input/search-input";
import { CategoriesContainer, Container } from "./header.styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
  onChangeSelected: (value: string) => void;
}
const Header: React.FC<HeaderProps> = ({
  search,
  setSearch,
  onChangeSelected,
}) => {
  const history = useHistory();
  const { getTotalPrice, getTotal } = useCart();
  const name = localStorage.getItem("user");

  return (
    <>
      <Container>
        <img
          src={Logo}
          alt="logo"
          id="logo"
          onClick={() => history.push("/home")}
        />
        <SearchInput
          onChangeSelected={onChangeSelected}
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
        <div className="support-number">
          <div className="center">
            <Typography variant="h6">0800 40 8004</Typography>
            <Typography>SAC</Typography>
          </div>
        </div>
        <div className="icons">
          <ButtonBase className="btn-margin cart-button">
            <PersonIcon />
            <p>{name}</p>
          </ButtonBase>
          <ButtonBase
            className="btn-margin cart-button"
            onClick={() => history.push("/cart")}
          >
            <Badge className="shop" badgeContent={getTotal} color="primary">
              <ShoppingCartIcon />
            </Badge>
            <p>
              Carrinho
              <br /> <span>R$ {getTotalPrice}</span>
            </p>
          </ButtonBase>
          <ButtonBase
            className="btn-margin cart-button"
            onClick={() => history.push("/sign-in-up")}
          >
            <ExitToAppIcon />
            <p>Sair</p>
          </ButtonBase>
        </div>
      </Container>
      <CategoriesContainer>
        <div className="menu-itens">
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
