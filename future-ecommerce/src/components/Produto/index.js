import React from "react";
import Styled from "styled-components";


const Produto = Styled.div`

`

const ImgProduto = Styled.img`
width:100px;
height:100px; 
`


class Produtos extends React.Component{
    render(){
        return(
            <Produto>
                <ImgProduto src={this.props.imagemProduto}></ImgProduto>
                <p>{this.props.nomeProduto}</p>
                <p>R${this.props.precoProduto},00</p>
                <button onClick={this.props.adcCarrinho}>Adicionar ao carrinho</button>
            </Produto>            
        )
    }
}

export default Produtos