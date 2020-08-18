import React from 'react';
import { Consumer } from './../store/StyleContext';




function Navbar (){
  return (

    <Consumer>
      {(value) => {
        
        return (
          <nav className="Navbar">
            <h2>React Example</h2>
            <button onClick={() => value.changeStyleMode() }>Click me</button>
          </nav>
        )
      }}
    </Consumer>
  )
}

export default Navbar;