// Crear un componente con el state - componente de clase

// desconectar el input y conectar lo con el state:
//    poner onChange   y  value

import React from 'react';

class SearchBar extends React.Component {
  state = {
    search: ""
  }

  handleChange = (e) => {
    const updatedText = e.target.value;
    this.setState({ search: updatedText })

    this.props.filterCountries(updatedText)
  }

  render() {
    return(
      <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
    )
  }
}

export default SearchBar;