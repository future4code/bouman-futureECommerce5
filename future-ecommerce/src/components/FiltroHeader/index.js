import React from "react";
import styled from "styled-components";

const EstiloHeader = styled.div`

`

class FiltroHeader extends React.Component {
   constructor(props){
      super(props)
   }
   render(){
      return (
         <EstiloHeader>            
            <select>
               <option>Preço: Crescente</option>
               <option>Preço: Descrescente</option>
            </select>
         </EstiloHeader>
      )
   }
}


export default FiltroHeader;