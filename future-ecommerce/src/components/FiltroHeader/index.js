import React from "react";
import styled from "styled-components";

const EstiloHeader = styled.div`
   display: grid;
   grid-column-start: 3;
   padding-top: 10px;
   padding-right: 10px;
`

class Header extends React.Component {
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


export default Header;