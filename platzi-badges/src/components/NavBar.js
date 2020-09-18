import React from 'react'
import "./styles/Navbar.css"
import logo from '../images/logo.svg'

class NavBar extends React.Component{
   render(){
      return (
         <div className="Navbar">
            <div className="container-fluid">
               <a href="/">
                  <img src={logo} alt={logo}/>
                  <span className="font-weight-light">Platzi</span>
                  <span className="font-weight-bold">Conf</span>
               </a>
            </div>
         </div>
      )
   }
}

export default NavBar
