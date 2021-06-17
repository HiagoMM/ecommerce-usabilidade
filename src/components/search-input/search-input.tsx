import InputBase, { InputBaseProps } from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import { Container, Categorias } from "./search-input.styles";
import { ButtonBase, Popover } from "@material-ui/core";
import { useState } from "react";
import { itens } from "../../pages/home/mocks";
import { Button } from "@material-ui/core";

interface SearchInputProps extends InputBaseProps {
  onChangeSelected: (value: string) => void;
}

export default function SearchInput({
  onChangeSelected,
  ...rest
}: SearchInputProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState(null);

  const handleSelect = (cat) => {
    onChangeSelected(cat);
    setSelected(cat);

    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <Container>
      <ButtonBase className="button" onClick={handleClick}>
        {selected || "Categorias"}
        <ExpandMore id="menu-logo" />
      </ButtonBase>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Categorias>
          {Array.from(new Set(itens.map((item) => item.category))).map(
            (cat) => (
              <Button
                key={cat}
                color="inherit"
                onClick={() => handleSelect(cat)}
              >
                {cat}
              </Button>
            )
          )}
          <Button key={0} color="inherit" onClick={() => handleSelect(null)}>
            Todas
          </Button>
        </Categorias>
      </Popover>
      <Divider className="divider" orientation="vertical" />
      <InputBase className="input" placeholder="Pesquisar produto" {...rest} />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Container>
  );
}
