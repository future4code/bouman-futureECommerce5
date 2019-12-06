import React from "react";
import Styled from "styled-components";
import ContainerFiltros from '../Filtros/index'
import ContainerCarrinho from '../Carrinho/index'
import ContainerProdutos from '../ContainerProdutos/index'


const MainContainer = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: 1fr 1fr;
`
const SectionContainer = Styled.section`
display: flex;
width: 100%;
`


class ContainerPrincipal extends React.Component{
   
    render(){
        const listaDeProdutos = this.props.produtos.map((produto) => {
            return  <ContainerProdutos dadosProdutos={produto} />
        })
        return(

        <SectionContainer>
        <ContainerFiltros></ContainerFiltros>
        
            <MainContainer>
            {listaDeProdutos}
            </MainContainer>

        <ContainerCarrinho adcProduto={this.adcProduto} ></ContainerCarrinho>
            </SectionContainer>   
        )
    }
}

export default ContainerPrincipal