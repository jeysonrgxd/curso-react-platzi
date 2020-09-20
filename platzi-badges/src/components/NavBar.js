import React from 'react'
import "./styles/Navbar.css"
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
   render(){
      return (
         <div className="Navbar">
            <div className="container-fluid">
               <Link to="/">
                  <img src={logo} alt={logo}/>
                  <span className="font-weight-light">Platzi</span>
                  <span className="font-weight-bold">Conf</span>
               </Link >
            </div>
         </div>
      )
   }
}

export default NavBar
