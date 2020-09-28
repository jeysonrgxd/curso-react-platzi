// si solo presentar informacion, no cambiamos estados y nada ps usamos funcion
import React from 'react'
import ReactDOM from 'react-dom'
import Badge from '../components/Badge'
import {Link} from 'react-router-dom' 
import confLogo from '../images/platziconf-logo.svg'
import Modal from '../components/Modal.js'

// creamos nuestra primer custoomHook

function useIncreseCount(Max){
   // siempre obtenemos el useState que deseamos para despues retornarla
   const [count, setCount] = React.useState(0)

   if(count >= Max){
      setCount(0)
   } 

   return [count, setCount]
}

//UI Components  componentes presentacionales,
export default function BadgeDetails(props){
   // utilizamos hooks para trabajar con stados en funciones
   const [count, setCount] = useIncreseCount(10)

   // obtenemos el prop badge
   const badge = props.badge
   return(
      <div>
         <div className="BadgeDetails__hero">
            <div className="container">
               <div className="row">
                  <div className="col-6">
                     <img src={confLogo} alt="Logo de la Conferencia" />
                  </div>
                  <div className="col-6 BadgeDetails__hero-attendant-name">
                     <h1>
                        {badge.firstName} {badge.lastName}
                     </h1>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col">
                  <Badge
                     firstName={badge.firstName}
                     lastName={badge.lastName}
                     email={badge.email}
                     twitter={badge.twitter}
                     jobTitle={badge.jobTitle}
                  />
               </div>
               <div className="col">
                  <h2>Actions</h2>
                  <div>
                     <div>
                        <button onClick={() => {
                           setCount(count + 1)
                        }} className="btn btn-primary mr-4">
                           Increase Count: {count}
                        </button>
                        <Link
                           className="btn btn-primary mb-4"
                           to={`/badges/${badge.id}/edit`}>
                           Edit
                        </Link>
                     </div>
                  </div>
                  <div>
                     <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                     <Modal isOpen={props.madalIsOpen} onClose={props.onCloseModal}>
                        <div className="">
                           <h1>Are You Sure?</h1>
                           <p>You are about delete this badge.</p>
                        </div>
                       <div className="mt-4">
                           <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
                           <button className="btn btn-primary">Cancel</button>
                       </div>
                     </Modal>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}