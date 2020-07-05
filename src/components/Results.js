import React from 'react';


const Resultado = ({term, total, quantity}) =>(   
          <div className="u-full-width resultado">
               <h2>Resumen</h2>
               <p>La cantidad solicitada es: ${ quantity }</p>
               <p>El plazo a pagar es de: { term } Meses</p>
               <p>Su pago mensual es de: ${ (total / term).toFixed(2) } </p>
               <p>El total a pagar es: ${ (total).toFixed(2) }</p>
          </div>
);
export default Resultado;