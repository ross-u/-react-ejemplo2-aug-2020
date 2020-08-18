import React from 'react';
import './App.css';
// import countriesJSON from './countries.json';
import ListItem from './components/ListItem';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import axios from 'axios';

class App extends React.Component {
  state = {
    countries: [], // incluye todos los datos/paises
    countriesToShow: [] 
  }


  getCountries = () => {
    axios.get('https://countries.tech-savvy.tech/countries')
      .then((response) => {
        this.setState( { countries: response.data, countriesToShow:  response.data } ) // con axios los datos de respuesta siempre van a ser devueltos dentro de `response.data`
      })
      .catch((err) => console.log(err))
  } 

  filterCountries = (searchString) => {
    const lowerSearchString = searchString.toLowerCase();
    // filtrar los paises utilizando el searchString
    // el array de los paises - this.state.countries
    const countriesCopy = [...this.state.countries];
    const filteredCountries = countriesCopy.filter( (countryObj) => {
      const countryName = countryObj.name.common.toLowerCase();

      if(countryName.includes(lowerSearchString) ) {
        return true;
      }
      else if (countryObj.cca3.toLowerCase().includes(lowerSearchString)) {
        return true;
      }
      else {
        return false;
      }
    })

    this.setState({ countriesToShow: filteredCountries })
    // cuando lo tenemos listo, hay que pasar este metodo al SearchBar como un prop
  }


  // se ejecuta cuando el componente esta montado - creado y mostrado en DOM
  componentDidMount() {
    this.getCountries();
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <SearchBar filterCountries={this.filterCountries} />
        <main>

          { this.state.countriesToShow.map( (countryObj) => {

          return <ListItem key={countryObj.cca3} countryObj={countryObj} />

          }) }
        </main>
      </div>
    );
  }
}

export default App;
