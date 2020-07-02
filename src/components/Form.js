import React,{ useState, Fragment } from 'react';
import { calculateTotal } from '../helpers'

function Form(props){
     const {quantity, saveQuantity, term, saveTerm, total, saveTotal } = props;
     //Define state
     const [error, saveError] = useState(false)
     //When the user clicks
     const Calculateloan = e =>{
          e.preventDefault();
          
          //Validate
          if(quantity === 0 || term === ''){
               saveError(true);
               return;
          }
          saveError(false)
          //make an appointment
          const total = calculateTotal(quantity, term);
          
          
          //Save total
          saveTotal(total);
     }
     

     return(
          <Fragment>
          <form onSubmit= { Calculateloan }>
               <div className="row">
                    <div>
                         <label>Cantidad Prestamo</label>
                         <input className="u-full-width" 
                         type="number" placeholder="Ejemplo: 3000" 
                         onChange={ e => saveQuantity (parseInt(e.target.value)) }/>
                    </div>
                    <div>
                         <label>Plazo para Pagar</label>
                         <select className="u-full-width" onChange={ e => saveTerm (parseInt(e.target.value)) }>
                              <option value="">Seleccionar</option>
                              <option value="3">3 meses</option>
                              <option value="6">6 meses</option>
                              <option value="12">12 meses</option>
                              <option value="24">24 meses</option>
                         </select>
                    </div>
                    <div>
                         <input type="submit" value="Calcular" className="button-primary u-full-width" />
                    </div>
               </div>
          </form>
          {(error) ? <p className="error">Todos los campos son obligatorios</p> : null}
          
          </Fragment>
     );

}
export default Form;