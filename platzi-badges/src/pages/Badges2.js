import React from 'react'

// import NavBar from '../components/NavBar'
import BadgesList from '../components/BadgesList'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'

// importamos el componente Link para las anclas y poder ais trabajar con el react-router
import { Link } from 'react-router-dom'
class Badges extends React.Component {

   handleClick = (e) => {
      this.setState({
         data: [
            {
               id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
               firstName: "Freda",
               lastName: "Grady",
               email: "Leann_Berge@gmail.com",
               jobTitle: "Legacy Brand Director",
               twitter: "FredaGrady22221-7573",
               avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
            }
         ]
      })
   }
   // ciclo de vida MONTAJE
   constructor(props) {
      super(props)
      this.state = {
         data: []
      }
      console.log("1 constructor");
   }

   componentDidMount(props) {
      console.log("3 componentDidMount()");
      this.insertStateDate = setTimeout(_ => {
         this.setState({
            data: [
               {
                  id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                  firstName: "Freda",
                  lastName: "Grady",
                  email: "Leann_Berge@gmail.com",
                  jobTitle: "Legacy Brand Director",
                  twitter: "FredaGrady22221-7573",
                  avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
               },
               {
                  id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                  firstName: "Major",
                  lastName: "Rodriguez",
                  email: "Ilene66@hotmail.com",
                  jobTitle: "Human Research Architect",
                  twitter: "ajorRodriguez61545",
                  avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
               },
               {
                  id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                  firstName: "Daphney",
                  lastName: "Torphy",
                  email: "Ron61@hotmail.com",
                  jobTitle: "National Markets Officer",
                  twitter: "DaphneyTorphy96105",
                  avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
               }
            ]
         })
      }, 3000)
   }

   render() {
      console.log("2 render()")
      return (
         <React.Fragment>
            <div className="Badges">
               <div className="Badges__hero">
                  <div className="Badges__container">
                     <img src={confLogo} alt="Conf Logo" className="Badges_conf-logo" />
                  </div>
               </div>
            </div>

            <div className="Badges__container">
               <div className="Badges__buttons d-flex justify-content-between">
                  <button onClick={this.handleClick}>Cambiar</button>
                  <Link to="/badges/new" className="btn btn-success">
                     New Badge
                  </Link>
               </div>

               <div className="Badges__list mt-5">
                  <div className="Badges__container">
                     <BadgesList badges={this.state.data} />

                  </div>
               </div>
            </div>
         </React.Fragment>
      )
   }

   // ciclo de vida Actualizacion
   componentDidUpdate(prevprops, prevstate) {
      console.log("4 actualizacion");
      console.log("Actualizacion", prevprops, prevstate);
      console.log("Actualizacion finalizada", this.props, this.state)
   }

   // ciclo de vida Desmontaje
   componentWillUnmount() {
      console.log("6 componentWillUnmount() desmontaje");
      // cancelamos el setTimeOut si no salimos del componente antes que se llene el state sino abara errores
      clearTimeout(this.insertStateDate)
   }


}

export default Badges