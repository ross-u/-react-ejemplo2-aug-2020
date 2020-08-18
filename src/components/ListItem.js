import React from 'react'

//function ListItem({ countryObj }) { // otra manera de desestructurar los props

function ListItem(props) {

  const { countryObj } = props; // desestructurando countryObj desde los props

  return <p className="ListItem"> {countryObj.name.common} - {countryObj.capital[0]}</p> 
}

export default ListItem
