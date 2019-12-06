import React from "react";
import Styled from "styled-components";

const Filtros = Styled.div`
border: solid 1px black;
padding:10px;
width: 15%;
margin-top:10px;
margin-left:10px;
`

class ContainerFiltros extends React.Component{
    render(){
        return(
            <Filtros>
                <h3>Filtros:</h3>
                <p>Valor Minimo</p>
                <input type="number"></input>
                <p>Valor Máximo</p>
                <input type="number"></input>
                <p>Buscar Produto</p>
                <input type="text"></input>
            </Filtros>
        )
    }
}

export default ContainerFiltros