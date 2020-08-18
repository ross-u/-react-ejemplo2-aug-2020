import React, { createContext } from 'react';


// const StyleContext = createContext();

const { Provider, Consumer } = createContext();
// Provider - contenedor para todos los valores que vamos a compartir
// Consumer - el componente que utilizaremos para leer/consumir los datos
// que vienen desde el Provider


class StyleContextProvider extends React.Component {
  state = {
    mode: ''  // light o dark
  }


  changeStyleMode = () => {
    let updatedMode = '';

    if (this.state.mode === 'dark') {
      updatedMode = ''
    }
    else if (this.state.mode === '') {
      updatedMode = 'dark'
    }
    this.setState({ mode: updatedMode })
  }


  render() {
    return( // value es el contenedor/datos que el Provider tiene disponible
      <Provider value={ { mode: this.state.mode, changeStyleMode: this.changeStyleMode } }>
        { this.props.children }
      </Provider>
    )
  }

}


export { StyleContextProvider, Consumer };
