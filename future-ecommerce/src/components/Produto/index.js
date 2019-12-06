import React from "react";
import Styled from "styled-components";


const Produto = Styled.div`
width: 200px;
border: solid 1px orange;
margin-right:10px;
margin-top:10px;
padding:10px;
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
                <p>{this.props.precoProduto}</p>
                <button>Adicionar ao carrinho</button>
            </Produto>            
        )
    }
}

export default Produtos