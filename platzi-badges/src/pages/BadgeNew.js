import React from 'react';

import './styles/BadgeNew.css';

import header from '../images/badge-header.svg';

import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'


class BadgeNew extends React.Component {
   render(){
      return (
         <div>
            <NavBar />

            <div className="BadgeNew__hero">
               <img className="img-fluid" src={header} alt="Logo"/>
            </div>

            <div className="container">
               <div className="row">
                  <div className="col-6">
                     <Badge
                        firstName="Ramos Garcia"
                        lastName="Jeyson gino"
                        twitter="@notengo"
                        jobTitle="Developer junior"
                        avatarUrl="http://gravatar.com/avatar/"
                     />
                  </div>
                  <div className="col-6">
                     <BadgeForm nombreComponent ="hola"></BadgeForm>
                  </div>
               </div>
            </div>
         </div>
      )
         
   }
}

export default BadgeNew