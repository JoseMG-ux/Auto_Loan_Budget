import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import Results from './components/Results';
import Spinner from './components/Spinner';

import logoHeart from './heartLogo.svg';
import logoReact from './reactLogo.svg';
import './index.css';


function App() {
  //Define the State
  const [ quantity, saveQuantity ]= useState(0);
  const [ term, saveTerm ]= useState('');
  const [  total, saveTotal ] = useState(0);
  const [ charging, saveCharging ] = useState(false);

  let components;

  if(charging){
    components = <Spinner/>;
  }
  else if(total === 0){
    components = <Message/>
  }else{
    components = <Results
      total = {total}
      term = {term}
      quantity = {quantity}
    />
  }

  return ( 
    <Fragment>
      <Header
        title="Cotizador de Prestamos"
      />
      <div className='container'>
        <Form
          quantity = { quantity }
          saveQuantity = { saveQuantity }
          term = { term }
          saveTerm = { saveTerm }
          saveTotal = { saveTotal }
          saveCharging = { saveCharging }
        />
            <div className="mensajes">
            {components}
            </div>
      </div>

      <div className="signature"><div className="left">Made with </div>  
          <img src={logoHeart} className="heart" alt="logo" />
              <div className="App">
                        <img src={logoReact} className="App-logo" alt="logo" />
              </div>
          <div className="right"> by&nbsp;<a href="https://jlmakes.now.sh" rel="noopener">   Jose Moreno Gomez</a></div>
          
    </div>
    </Fragment>
  );
}

export default App;
