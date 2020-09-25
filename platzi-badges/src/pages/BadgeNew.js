import React from 'react';

import './styles/BadgeNew.css';

import header from '../images/platziconf-logo.svg';

// import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import api from '../api'



class BadgeNew extends React.Component {
   state = {form:{}}

   handleChange = e =>{
      this.setState({
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
         // cambias de pestaña o de pagina
         this.props.history.push('/Badges')

      } catch (error) {
         this.setState({loading:false,error:error})
      }
   }

   render(){
      
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
                     />
                  </div>
               </div>
            </div>
         </React.Fragment>
      )
         
   }
}

export default BadgeNew