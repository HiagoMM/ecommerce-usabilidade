import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import { Container } from "./search-input.styles";
import { ButtonBase } from "@material-ui/core";

export default function SearchInput() {
  return (
    <Container>
      <ButtonBase className="button">
        CATEGORIAS
        <ExpandMore id="menu-logo" />
      </ButtonBase>
      <Divider className="divider" orientation="vertical" />
      <InputBase className="input" placeholder="Pesquisar produto" />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Container>
  );
}
