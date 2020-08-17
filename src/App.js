import React from 'react';
import './App.css';
// import countriesJSON from './countries.json';
import ListItem from './components/ListItem';
import axios from 'axios';

class App extends React.Component {
  state = {
    countries: []
  }


  getCountries = () => {
    axios.get('https://countries.tech-savvy.tech/countries')
      .then((response) => {
        this.setState( { countries: response.data } )
      })
      .catch((err) => console.log(err))
  } 

  getCountriesAsync = async () => {
    try {
      const response = await axios.get('https://countries.tech-savvy.tech/countries');
      this.setState( { countries: response.data } );
    }
    catch(err) {
      console.log(err);
    }
  } 


  // se ejecuta cuando el componente esta montado - creado y mostrado en DOM
  componentDidMount() {
    this.getCountriesAsync();
  }


  render() {
    return (
      <div className="App">
        { this.state.countries.map( (countryObj) => {

        return <ListItem countryObj={countryObj} />

        }) }
      </div>
    );
  }
}

export default App;
