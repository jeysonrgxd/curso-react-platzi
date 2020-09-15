// siempre cuando creamos un componente tenemos que importar react
import React from 'react'

// traemos los estilos para nuestro componente (create-react-app y babel se encargar de importarlo, al compilarlo)
import './styles/Badge.css'


// traemos la imagen ya que es webpack la que ara que una vez importado la imagen ara la magia
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component{
   // @override aplicamos el polimorfismos modificando la funcion render que eredamos de React.Component
   render(){
      // tener en cuenta que para poner clases debemos usar className ya que la palabra class es keywork ya recervado y react y webpack no les gusta que utilezemos class
      return <div className="Badge">
         <div className="Badge__header">
            <img src={confLogo} alt="Logo de la conferencia" />
         </div>

         <div className="Badge__section-name">
            <img 
               className = "Badge__avatar"
               src="https://www.gravatar.com/avatar?id=identicon" 
               alt="Avatar" />
            <h1>Jeyson <br/> Gino</h1>
         </div>
            
         <div className="Badge__section-info">
            <p>Junior Developer Web</p>
            <p>No tiwter</p>
         </div>

         <div className="Badge__footer">
            #platziconf
         </div>
      </div>
   }
}

export default Badge