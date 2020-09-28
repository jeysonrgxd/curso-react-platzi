import React from 'react'

import ReactDOM from 'react-dom'

import './styles/Modal.css'

export default function Modal(props){
   if(!props.isOpen){
      return null
   }else{
      return ReactDOM.createPortal(
         <div className="Modal">
            <div className="Modal__container">
               <button onClick={props.onClose} className="Modal__close-button">
                  X
               </button>
               {/* recordar que tambien aparte de recibir hmtl tambien recive componentes y lo pone aqui */}
               {props.children}
            </div>
         </div>,
         document.getElementById("modal")
      )

   }
}