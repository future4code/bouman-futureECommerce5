import React from "react";
import Styled from "styled-components";
import ContainerFiltros from '../Filtros/index'
import ContainerCarrinho from '../Carrinho/index'
import ContainerProdutos from '../ContainerProdutos/index'


const MainContainer = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr ;
`

class ContainerPrincipal extends React.Component{
   
    render(){
        // const listaDeProdutos = this.props.produtos.map((produto) => {
        //     return <ContainerProdutos/>
        // })
        return(
            <MainContainer>
                <ContainerFiltros></ContainerFiltros>
                <ContainerProdutos listaProdutos={this.props.produtos}></ContainerProdutos>
                <ContainerCarrinho></ContainerCarrinho>
                
               
            </MainContainer>
            
        )
    }
}

export default ContainerPrincipal