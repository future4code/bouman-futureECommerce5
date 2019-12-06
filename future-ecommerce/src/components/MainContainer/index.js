import React from "react";
import Styled from "styled-components";
import ContainerFiltros from '../Filtros/index'
import ContainerCarrinho from '../Carrinho/index'
import ContainerProdutos from '../ContainerProdutos/index'


const MainContainer = Styled.div`
display: flex;
`

class ContainerPrincipal extends React.Component{
   
    render(){
        const listaDeProdutos = this.props.produtos.map((produto) => {
            return  <ContainerProdutos dadosProdutos={produto} />
        })
        return(

            <MainContainer>
                <ContainerFiltros></ContainerFiltros>
                    {listaDeProdutos}
                <ContainerCarrinho adcProduto={this.adcProduto} ></ContainerCarrinho>

            </MainContainer>
            
        )
    }
}

export default ContainerPrincipal