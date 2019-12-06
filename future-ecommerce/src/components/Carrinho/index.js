import React from "react";
import Styled from "styled-components";

const Carrinho = Styled.div`
border: solid 1px black;
padding:10px;
width: 15%;
margin-top:10px;
margin-left: 40px;
`


class ContainerCarrinho extends React.Component{
    render(){

        return(
            <Carrinho >
               
                <h3>Carrinho:</h3>
                <p>Total: R$ 0.00</p>
               
            </Carrinho>

        )
    }
}

export default ContainerCarrinho