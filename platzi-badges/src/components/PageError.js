import React from 'react'
import '../components/styles/PageError.css'

export default function PageError (props){
   return(
      <div className="PageError">❌ {props.error.message} 😱</div>
   )
}