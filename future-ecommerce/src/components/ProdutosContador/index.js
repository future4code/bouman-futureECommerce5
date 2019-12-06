import React from "react";
import styled from "styled-components";

const ProdutoContador = styled.div`
display:flex;
`

class ProdutosContador extends React.Component {
   constructor(props){
      super(props)
   }

   render(){
      return (
         <ProdutoContador>            
            <p>Quantidade de Produtos: 0</p>
         </ProdutoContador>
      )
   }
}


export default ProdutosContador;