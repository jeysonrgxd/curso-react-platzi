import React from 'react';
import NavBar from './NavBar'

function Layout (props){

   // de esta forma obtenemos los datos dentro de nuestra etiqueta
   // const children = props.children
   return(
      <React.Fragment>
         <NavBar />
         {props.children}
      </React.Fragment>
   )
}

export default Layout