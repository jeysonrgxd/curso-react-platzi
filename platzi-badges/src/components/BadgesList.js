import React from 'react'
import './styles/Badges.css'

// creamos este componente Por que BadgeList tiene una recursividad Unica y le pertenece
class BadgesList extends React.Component {
   render(){
      return(
         <ul className="list-unstyled">
            {this.props.badges.map(badge => {
               return (
                  <li className="shadow p-3 mb-4 bg-white d-flex align-items-center" key={badge.id}>
                     <div>
                        <img src={badge.avatarUrl} alt=""/>
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