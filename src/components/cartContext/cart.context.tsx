import { useContext } from "react";
import { useMemo } from "react";
import { createContext, useState } from "react";
import { Item } from "../../pages/home/mocks";

interface CartContext {
  cartItens: Item[];
  setCartItens: (value: Item[]) => void;
  getTotal: number;
  getTotalPrice: string;
}

const itensContext = createContext<CartContext>({} as CartContext);

export const useCart = () => useContext(itensContext);

const ItensContextProvider: React.FC = ({ children }) => {
  const [cartItens, setCartItens] = useState<Item[]>([]);

  const getTotal = useMemo(() => cartItens.length, [cartItens]);

  const getTotalPrice = useMemo(
    () =>
      cartItens.length
        ? cartItens
            .map((item) => Number(item.price.split("R$")[1].trim()))
            .reduce((prev, atual) => prev + atual)
            .toFixed(2)
        : "0.00",
    [cartItens]
  );
  return (
    <itensContext.Provider
      value={{ cartItens, setCartItens, getTotalPrice, getTotal }}
    >
      {children}
    </itensContext.Provider>
  );
};

export default ItensContextProvider;
