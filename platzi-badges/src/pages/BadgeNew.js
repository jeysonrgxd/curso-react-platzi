import React from 'react';

import './styles/BadgeNew.css';

import header from '../images/platziconf-logo.svg';

// import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import Loader from '../components/Loader' 

import api from '../api'



class BadgeNew extends React.Component {
   state = {
      loading:false,
      error:false,
      form:{}
   }

   handleChange = e =>{
      this.setState({
         loading:false,
         error:false,
         form:{
            ...this.state.form,
            [e.target.name]:e.target.value
         }
      })
   }
   
   handleSubmit = async e =>{
      e.preventDefault()
      this.setState({loading:true, error:null})
      try {
         await api.badges.create(this.state.form)
         this.setState({ loading: true })
         // cambias de pestaña o de pagina, esto se logra ya que el router le pasa parametro a los props de que pagina nos encontramos
         this.props.history.push('/Badges')

      } catch (error) {
         this.setState({loading:false,error:error})
      }
   }

   render(){
      // esto es para que carge mientras hace la peticion de post del formulario

      if (this.state.loading) {
         console.log("se guardo");
         return (
            <Loader></Loader>
         )
      }
      return (
         <React.Fragment>
            <div className="BadgeNew__hero">
               <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
            </div>

            <div className="container">
               <div className="row">
                  <div className="col-6">
                     <Badge
                        firstName={this.state.form.firstName || "RAMOS GARCIA"}
                        lastName={this.state.form.lastName || "JEYSON GINO"}
                        twitter={this.state.form.twitter || "@noTengo"}
                        jobTitle={this.state.form.jobTitle || "WEBDEVOLOPER"}
                        email={this.state.form.email || ""}
                        
                     />
                  </div>
                  <div className="col-6">
                     <BadgeForm 
                        onChange={this.handleChange} 
                        formValues={this.state.form}
                        onSubmit = {this.handleSubmit}
                        error={this.state.error}
                     />
                  </div>
               </div>
            </div>
         </React.Fragment>
      )
         
   }
}

export default BadgeNew