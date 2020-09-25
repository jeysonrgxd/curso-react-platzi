import React from 'react'

// import NavBar from '../components/NavBar'
import BadgesList from '../components/BadgesList'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'

// IMPORTAMOS LA PAGINA QUE NOS MOSTRARA EL LOADER MIENTRAS TRAEMOS LOS DATOS DE LA API y La pagina de error
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'

// importamos el componente Link para las anclas y poder ais trabajar con el react-router
import { Link } from 'react-router-dom'
class Badges extends React.Component{
   state = {
      loading:true,
      error:null,
      data:[]
   }

   componentDidMount () {
      this.fetchData()
   }

   fetchData = async () =>{
      // reseto el loading y el error ya que are una peticion nueva
      this.setState({loading:true, error:null})

      // traemos los datos de badges de la api que importamos
      try {
         const data = await api.badges.list()

         // seteamos el loading y el data del state
         this.setState({loading:false,data:data})
      } catch (error) {
         // si hay algun error lo capturamos
         this.setState({loading:false,error:error})
         
      }
   }

   render(){
      // comprobamos donde el estado del loading sea cierto
      if(this.state.loading === true){
         // mostramos el componente loading para dar una mejor esperiencia de usuario
         return(<PageLoading />)
      }

      if(this.state.error){
         return (<PageError error={this.state.error}/>)
      }
      return(
         <React.Fragment>
            <div className="Badges">
               <div className="Badges__hero">
                  <div className="Badges__container">
                     <img src={confLogo} alt="Conf Logo" className="Badges_conf-logo"/>
                  </div>
               </div>
            </div>

            <div className="Badges__container">
               <div className="Badges__buttons ">
                  <Link to="/badges/new" className="btn btn-success">
                     New Badge
                  </Link>
               </div>

               <div className="Badges__list mt-5"> 
                  <div className="Badges__container">
                     <BadgesList badges={this.state.data}/>
  
                  </div>
               </div>
            </div>
         </React.Fragment>
      )
   }

}

export default Badges