import React from 'react'
import {Link} from 'react-router-dom'

// componente sin estado por eso utilizamos funcion
function Home(){
   return (
      <div>
         <h1>Estas en el Home</h1>
         <Link to="/Badges" className="btn btn-success">Ver Badges</Link>
      </div>
   )

}

export default Home