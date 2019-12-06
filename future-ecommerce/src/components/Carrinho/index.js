import React from "react";
import Styled from "styled-components";

const Carrinho = Styled.div`
border: solid 1px black;
padding:10px;
height: auto;
width: 200px;
margin-top:10px;
`

class ContainerCarrinho extends React.Component{
    render(){
        return(
            <Carrinho>
                <h3>Carrinho:</h3>
                <p>Total: R$ 0.00</p>
            </Carrinho>
        )
    }
}

export default ContainerCarrinho