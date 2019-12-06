import React from "react";
import Styled from "styled-components";
import Produtos from "../Produto/index";



const ContainerProduto = Styled.div`
display:grid;
padding: 10px;
gap: 10px;
width: 80%;
align-items: center;
margin: 10px;
margin-left: 30px;
border: 1px solid orange;
`

class ContainerProdutos extends React.Component{
    constructor(props){
        super(props);
    }  
    
    render(){
        
        
        return(
            <ContainerProduto>
            <Produtos 
            imagemProduto={this.props.dadosProdutos.imgProduto}
            nomeProduto={this.props.dadosProdutos.nome}
            precoProduto={this.props.dadosProdutos.valor}
            > 
            </Produtos>
            </ContainerProduto>
        );
    }
}

export default ContainerProdutos