import React from "react";
import Styled from "styled-components";
import Produtos from "../Produto/index";
import Header from '../FiltroHeader/index';
import ProdutosContador from '../ProdutosContador/index'


const ContainerProduto = Styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
grid-row-gap: 10px;

`

class ContainerProdutos extends React.Component{
    constructor(props){
        super(props);
    }  
    
    render(){
        const listaDeProdutos = this.props.listaProdutos.map((produto) => {
            return <Produtos imagemProduto={this.props.listaProdutos.imgProduto}></Produtos>
        })         
        return(
            <ContainerProduto>
                <ProdutosContador/>
                <Header/>
                {listaDeProdutos}

            </ContainerProduto>
        );
    }
}

export default ContainerProdutos