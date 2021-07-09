import React, { Fragment } from 'react'

// Components 
import Header from './components/Header'
import Characters from './components/Characters';

// Styles
import './main.sass'
import './css/index.css'

const App = () => {
  return (
    <Fragment>
      <Header
        title="Rick and Morty API"
      />
      <Characters />
    </Fragment>
  );
}

export default App;