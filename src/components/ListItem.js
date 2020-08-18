import React from 'react';
import { Consumer } from './../store/StyleContext';

//function ListItem({ countryObj }) { // otra manera de desestructurar los props

function ListItem(props) {

  const { countryObj } = props; // desestructurando countryObj desde los props

  return (
    <Consumer>
      { (value) => {
        const { mode } = value;

        return <p className={"ListItem " + mode}> {countryObj.name.common} - {countryObj.capital[0]}</p>
      }}
    </Consumer>
  ) 
}

export default ListItem


/* 
    <Consumer>
      { (valueFromProvider) => {

         Develover el componente y podemos consumir los datos del `valueFromProvider`

      }}
    </Consumer>

*/
