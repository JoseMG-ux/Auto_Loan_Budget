import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form'


function App() {
  //Define the State
  const [quantity, saveQuantity]= useState(0);
  const [term, saveTerm]= useState('');
  const [total, saveTotal] = useState(0)


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
        total = { total }
        saveTotal = { saveTotal }
      />
      <p>Total a pagar ${total}</p>
      </div>
    
    </Fragment>
  );
}

export default App;
