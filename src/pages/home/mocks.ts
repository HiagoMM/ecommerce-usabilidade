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
  {
    name: "Cerveja Puro Malte Heineken Lata 350ml",
    price: "R$ 4.39",
    category: "Bebidas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/170872-800-auto?width=800&height=auto&aspect=true",
  },
  {
    name: "Cerveja Pilsen Puro Malte Bohemia Lata 350ml",
    price: "R$ 2,35",
    category: "Bebidas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/155944-800-auto?width=800&height=auto&aspect=true",
  },


  {
    name: "Bebida Láctea UHT Chocolate Toddynho Caixa 200ml",
    price: "R$ 1,29",
    category: "Bebidas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/155614-800-auto?width=800&height=auto&aspect=true",
  },
  {
    name: "Água Mineral Natural sem Gás Crystal Garrafa 500ml",
    price: "R$ 0,98",
    category: "Bebidas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/155428-800-auto?width=800&height=auto&aspect=true",
  },
  {
    name: "Refrigerante Original Coca-Cola Garrafa 250ml",
    price: "R$ 1,99",
    category: "Bebidas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/156388-800-auto?width=800&height=auto&aspect=true",
  },
  {
    name: "Leite UHT Integral Elegê Caixa 1l",
    price: "R$ 3,69",
    category: "Bebidas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/155735-800-auto?width=800&height=auto&aspect=true",
  },
  {
    name: "Amaciante Downy 1,5L – 3 Unidades",
    price: "R$ 54,00",
    category: "Limpeza",
    supplier: "Extra",
    img: "https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1263771081",
  },
  {
    name: "Sabão Líquido Omo Perfeita 3L - 4 Unidades",
    price: "R$ 118,16",
    category: "Limpeza",
    supplier: "Extra",
    img: "https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=128746567",
  },
  {
    name: "Caixa de Bombom Nestlé 251g com 15 Unidades",
    price: "R$ 9,99",
    category: "Guloseimas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/156610-800-auto?width=800&height=auto&aspect=true",
  },
  {
    name: "Caixa de Bombom Sortido Lacta Favoritos 250,6g",
    price: "R$ 9,79",
    category: "Guloseimas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/155577-800-auto?width=800&height=auto&aspect=true",
  },
  {
    name: "Biscoito Recheio Flocos  Pacote 130g",
    price: "R$ 1,19",
    category: "Guloseimas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/166121-800-auto?width=800&height=auto&aspect=true",
  },
  {
    name: "Biscoito Maria Tradicional Vitarella Pacote 400g",
    price: "R$ 3,29",
    category: "Guloseimas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/155553-800-auto?width=800&height=auto&aspect=true",
  },
  {
    name: "Wafer Recheio Chocolate Lacta Bis 126g",
    price: "R$ 4,39",
    category: "Guloseimas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/155715-800-auto?width=800&height=auto&aspect=true",
  },
  {
    name: "Salgadinho Requeijão Elma Chips Cheetos Pacote 45g",
    price: "R$ 2,59",
    category: "Guloseimas",
    supplier: "Hiper",
    img: "https://bompreco.vtexassets.com/arquivos/ids/156226-800-auto?width=800&height=auto&aspect=true",
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
