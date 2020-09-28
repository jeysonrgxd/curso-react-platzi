import React, {Component} from 'react'
import api from '../api'
import PageLoading from '../components/PageLoading'
import BadgeDetails from './BadgeDetails'
import PageError from '../components/PageError'
import './styles/BadgeDetails.css'

// Separamos las tareas en diferentes funciones
//Container Components componentes container este tendra la logica y el manejo de datos
class BadgeDetailsContainer extends Component{

   state={
      loading:true,
      error:null,
      data:undefined,
      modalIsOpen:false
   }

   componentDidMount(){
      this.fetchData()
   }

   fetchData = async ()=>{
      console.log("entro en el fetch");
      // reseteamos como siempre el loading y el error
      this.setState({loading:true,error:null})
      try {
         const data = await api.badges.read(this.props.match.params.badgeId)
         console.log(data);
         this.setState({loading:false,data:data})
      } catch (error) {
         this.setState({loading:false,error:error})
         
      }
   }

   handleCloseModal = () =>{
      this.setState({modalIsOpen:false})
   }

   handleOpenModal = () =>{
      this.setState({modalIsOpen:true})
   }

   handleDeleteBadge= async () => {
      try {
         await api.badges.remove(this.props.match.params.badgeId)
         this.setState({loading:false})
         this.props.history.push('/badges')
      } catch (error) {
         this.setState({loading:false, error:error})
      }
   }

   render(){
      if(this.state.loading){
         return(
            <PageLoading></PageLoading>
         )
      }
      if(this.state.error){
         return(
            <PageError></PageError>
         )
      }
      // GUARDAMOS EL STATE de data EN UNA VARIABLE que sera badge PARA NO TENER QUE ESTAR INGRESANDO TANTO
      // const badge = this.state.data

      return(
      <BadgeDetails 
         badge={this.state.data} 
         onCloseModal={this.handleCloseModal} 
         onOpenModal ={this.handleOpenModal}
         madalIsOpen ={this.state.modalIsOpen}
         onDeleteBadge ={this.handleDeleteBadge}
         />
      )
   }
}

export default BadgeDetailsContainer