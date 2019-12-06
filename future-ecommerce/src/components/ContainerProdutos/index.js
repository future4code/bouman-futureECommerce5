import React from "react";
import Styled from "styled-components";
import Produtos from "../Produto/index";
import Header from '../FiltroHeader/index';
import ProdutosContador from '../ProdutosContador/index'


const ContainerProduto = Styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-row-gap: 10px;

`

class ContainerProdutos extends React.Component{
    constructor(props){
        super(props);
    }  
    
    render(){
        
        
        return(
            <ContainerProduto>
                {/* <ProdutosContador/>
                <Header/>    */}
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