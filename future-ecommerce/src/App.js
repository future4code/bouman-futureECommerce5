<<<<<<< HEAD
=======
import React from 'react';
import './App.css';
import styled from 'styled-components';
import ContainerPrincipal from './components/MainContainer/index';

const listaProdutos = [
  {
      id: 1,
      nome: "Camiseta 1",
      valor: 50,
      imgProduto: "https://cdn.shopify.com/s/files/1/0107/9256/6843/products/99shirts_camiseta_cowboy-espacial_cinza-mescla_1800x1800.jpg?v=1552071989",

  },

  {
      id: 2,
      nome: "Camiseta 2",
      valor: 60,
      imgProduto: "https://d26lpennugtm8s.cloudfront.net/stores/177/145/products/camiseta-branca-poliester-21-0997f1bdbf86e6fa7315121048125602-1024-1024.jpg",
      
  },

  {
      id: 3,
      nome: "Camiseta 3",
      valor: 55,
      imgProduto: "https://img.elo7.com.br/product/main/21AE4D0/camiseta-masculina-naves-espaciais-estampa-digital.jpg",
      
  },

  {
      id: 4,
      nome: "Camiseta 4",
      valor: 30,
      imgProduto: "https://shop.darrudadesign.com/wp-content/uploads/2018/06/takeme_pleasepreto1-600x581.png",
      
  },

  {
      id: 5,
      nome: "Camiseta 5",
      valor: 30,
      imgProduto: "https://cdn.colab55.com/images/1483562573/studio/14974/art/67412/tees/standard/preta/1.png",
  },

  {
      id: 6,
      nome: "Camiseta 5",
      valor: 30,
      imgProduto: "https://cdn.colab55.com/images/1483562573/studio/14974/art/67412/tees/standard/preta/1.png",
  },

  {
      id: 7,
      nome: "Camiseta 5",
      valor: 30,
      imgProduto: "https://cdn.colab55.com/images/1483562573/studio/14974/art/67412/tees/standard/preta/1.png",
  },

]


class App extends React.Component {
  render(){
    
  return (
      <div className="App">
          <ContainerPrincipal produtos={listaProdutos}></ContainerPrincipal>
           
      </div>
    );
  }
}

export default App;
>>>>>>> fefc07d5ce4642f43f5a25ddeba610a753d3a0d5
