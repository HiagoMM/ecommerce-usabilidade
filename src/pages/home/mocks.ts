export const categories = [
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

export const mercados = [
  {
    name: "Extra",
    img: "https://www.querotelefonesac0800.com/wp-content/uploads/2020/08/telefone-extra-1.jpg",
  },
  {
    name: "Hiper",
    img: "https://saoluisshopping.com/wp-content/uploads/2020/06/21C5CDB7-524E-4DEC-846C-BB9E6DA3BE03.jpeg",
  },
  {
    name: "Mercantil Rodrigues",
    img: "http://www.mercantilrodrigues.com.br/sites/default/files/image-share.jpg",
  },
];

export interface Item {
  name: string;
  price: string;
  category: string;
  supplier: string;
  img: string;
}

export const itens: Item[] = [
  {
    name: "Cebola 1 Unidade Aprox. 150g",
    price: "R$ 1.00",
    category: "Verdura",
    supplier: "Extra",
    img: "https://bompreco.vtexassets.com/arquivos/ids/168106-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Tomate Salada 1 Unidade Aprox. 250g",
    price: "R$ 0.50",
    category: "Verdura",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/161653-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Flocão Novomilho pacote 500g",
    price: "R$ 1.50",
    category: "Comida",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/162732-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Abacate 1 Unidade Aprox. 150g",
    price: "R$ 0.25",
    category: "Fruta",
    supplier: "Rede Compras",
    img: "https://bompreco.vtexassets.com/arquivos/ids/161571-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Peito de Frango Congelado",
    price: "R$ 1.00",
    category: "Carnes",
    supplier: "Extra",
    img: "https://bompreco.vtexassets.com/arquivos/ids/161666-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Salsicha 1 Unidade Aprox. 150g",
    price: "R$ 5.00",
    category: "Carnes",
    supplier: "Maxxi",
    img: "https://bompreco.vtexassets.com/arquivos/ids/156116-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Detergente ypê 250ml",
    price: "R$ 2.00",
    category: "Limpeza",
    supplier: "Carrefour",
    img: "https://bompreco.vtexassets.com/arquivos/ids/157729-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Vanish 10x Multipower",
    price: "R$ 5.00",
    category: "Limpeza",
    supplier: "Extra",
    img: "https://bompreco.vtexassets.com/arquivos/ids/156072-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Cebola 1 Unidade Aprox. 150g",
    price: "R$ 1.06",
    category: "Verdura",
    supplier: "Carrefour",
    img: "https://bompreco.vtexassets.com/arquivos/ids/168106-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Tomate Salada 1 Unidade Aprox. 250g",
    price: "R$ 0.48",
    category: "Verdura",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/161653-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Flocão Novomilho pacote 500g",
    price: "R$ 1.48",
    category: "Comida",
    supplier: "Carrefour",
    img: "https://bompreco.vtexassets.com/arquivos/ids/162732-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Abacate 1 Unidade Aprox. 150g",
    price: "R$ 0.25",
    category: "Fruta",
    supplier: "Maxxi",
    img: "https://bompreco.vtexassets.com/arquivos/ids/161571-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Peito de Frango Congelado",
    price: "R$ 10.00",
    category: "Carnes",
    supplier: "Rede Compras",
    img: "https://bompreco.vtexassets.com/arquivos/ids/161666-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Salsicha 1 Unidade Aprox. 150g",
    price: "R$ 5.00",
    category: "Carnes",
    supplier: "Rede Compras",
    img: "https://bompreco.vtexassets.com/arquivos/ids/156116-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Detergente ypê 250ml",
    price: "R$ 2.00",
    category: "Limpeza",
    supplier: "Extra",
    img: "https://bompreco.vtexassets.com/arquivos/ids/157729-163-163?width=163&height=163&aspect=true",
  },
  {
    name: "Vanish 10x Multipower",
    price: "R$ 5.00",
    category: "Limpeza",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/156072-163-163?width=163&height=163&aspect=true",
  },
];

export const cards = [
  {
    desc: "MasterCard Final: 3131",
    img: "https://www.clubeextra.com.br/checkout/icons/mastercard-icon.svg",
  },
  {
    desc: "MasterCard Final: 2223",
    img: "https://www.clubeextra.com.br/checkout/icons/mastercard-icon.svg",
  },
  {
    desc: "Novo Cartão de Crédito",
    img: "https://www.clubeextra.com.br/checkout/icons/credit-card-icon.svg",
  },
  {
    desc: "Novo Cartão de Débito",
    img: "https://www.clubeextra.com.br/checkout/icons/credit-card-icon.svg",
  },
];
