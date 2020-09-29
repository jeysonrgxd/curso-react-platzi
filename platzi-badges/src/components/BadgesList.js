import React from 'react'
import './styles/Badges.css'
import { Link } from 'react-router-dom'
import Grabatar from './Grabatar'

// creamos este componente Por que BadgeList tiene una recursividad Unica y le pertenece
function BadgesList(props) {
   // guardamos los badges
   const badges = props.badges
   // usamos hook el state
   const [query, setQuery] = React.useState('')
   const filteredBadges = badges.filter(badge=>{
      // buscamos mediante el primer nombre
      // return badge.firstName.includes(query)

      // buscamos mediante los apellidos y el nombre pero lo pasamos todo a mayusculas para que cuando nosotros metamos en el input letras minusculas nos encuentre ya sea que los badges tengan mayuscula al inicio este los encontrara
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
   })

   // si los datos recibidos estan vacios enviamos el mensaje respectivo y lo invitamos a generar un nuevo badge
   if (filteredBadges.length === 0) {
      return (
         <div>
            <div className="form-group">
               <label >Filter Badges</label>
               <input
                  type="text"
                  className="form-control"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value) }}

               />
            </div>
            <h3>No badges were found</h3>
            <Link to="/badges/new" className="btn btn-success">
               Create new badge
            </Link>
         </div>
      )
   }
   return (
      <div className="BadgesList">
         <div className="form-group">
            <label >Filter Badges</label>
            <input
               type="text"
               className="form-control"
               value={query}
               onChange = {(e)=>{ setQuery(e.target.value) }}

            />
         </div>
         <ul className="list-unstyled">
            {filteredBadges.map(badge => {
               return (
                  <li className="shadow p-3 mb-4 bg-white" key={badge.id}>
                     <Link className="badge-link text-reset text-decoration-none d-inline-flex align-items-center" to={`/badges/${badge.id}`}>
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
                     </Link>

                  </li>
               )
            })}
         </ul>
      </div>
   )

}

export default BadgesList