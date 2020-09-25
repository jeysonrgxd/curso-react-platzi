import React from 'react'
import './styles/Badges.css'
import {Link} from 'react-router-dom'
import Grabatar from './Grabatar'

// creamos este componente Por que BadgeList tiene una recursividad Unica y le pertenece
class BadgesList extends React.Component {
   render(){
      // si los datos recibidos estan vacios enviamos el mensaje respectivo y lo invitamos a generar un nuevo badge
      console.log(this.props);
      if(this.props.badges.length === 0){
         return(
            <div>
               <h3>No badges were found</h3>
               <Link to="/badges/new" className="btn btn-success">
                  Create new badge
               </Link>
            </div>
         )
      }
      return(
         <ul className="list-unstyled">
            {this.props.badges.map(badge => {
               return (
                  <li className="shadow p-3 mb-4 bg-white d-flex align-items-center" key={badge.id}>
                     <div>
                        <Grabatar
                           email={badge.email + badge.twitter}
                           alt="Avatar" />
                     </div>
                     <div>
                        <p>{badge.firstName} {badge.lastName}</p>
                        <p>{badge.email}</p>
                        <p>{badge.jobTitle}</p>
                        <p>{badge.twitter}</p>
                     </div>
                     
                  </li>
               )
            })}
         </ul>
      )
   }
}

export default BadgesList