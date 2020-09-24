import React from 'react'
import './styles/PageLoading.css'
import Loader from './Loader'

// cremos una funcion en vez d eclases ya que no tendra props,
export default function PageLoading () {
   return (
      <div className="PageLoading">
         
         <Loader ></Loader>
      </div>
   )
}