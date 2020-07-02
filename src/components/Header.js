import React, { Fragment } from 'react';

//Function Declaration
function Header({title}){//Destructuring

     return (
          <Fragment>
               <h1>{ title }</h1>
          </Fragment>
     )
}
export default Header;



//Function Expression
// const Header = ({title}) => {
//      return ( 
//           <Fragment>
//                <h1>{ title }</h1>
//           </Fragment>
//      );
// }
