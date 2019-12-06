import React from 'react';
import './App.css';
import styled from 'styled-components';
import MainContainer from './components/MainContainer/index';

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
    constructor(props){
        super(props)
        this.state = {
            produtos: listaProdutos,
            arrayProdutos: [],

        }
    }


    adcProduto = (produtos) => {
        const novoArrayCarrinho = [...this.state.arrayProdutos]
        const indexCarrinho = this.state.arrayProdutos.findIndex((item) => item.produtos.id === produtos.id)
    
        if (indexCarrinho > -1) {
            novoArrayCarrinho[indexCarrinho].quantity += 1
        } else {
            novoArrayCarrinho.push({ produto: produtos, quantity: 1 })
        }
    
        this.setState({
          arrayProdutos: novoArrayCarrinho,
        })
        console.log("dasda")
      }


  render(){
    
  return (
      <div className="App">
          <MainContainer produtos={listaProdutos}></MainContainer>
           
      </div>
    );
  }
}

export default App;
