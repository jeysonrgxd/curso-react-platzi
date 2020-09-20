import React from 'react'

class BadgeForm extends React.Component{

   // inicializamos el state para poder manejar nuestra informacion de nuestro inputs y para poder tener solo una de via de guardado de nuestra informacion para que sea solo atravez de state
   // state={
   //    firstName: "",
   //    lastName: "",
   //    email: "",
   //    jobTitle: "",
   //    twitter: "",
   // }

   //================ Declaracion de funciones para los eventos: ============================
   
   // esta es una forma de como pasar otras variables ademas del event
   // https://codesandbox.io/s/ovyzrm95l5?file=/src/index.js:466-493

   // handleChange(e){
   //    console.log(this);
   //    console.log(e.target.value);
   // }
   // handleChange = (e) =>{
      // console.log({
      //    name:e.target.name,
      //    value:e.target.value
      // });
   // console.log(this);

   // seteamos el estado indicando cada propiedad que deriva del name del imput para eso creamos claves dinamicas de ecmascript
   // this.setState({
   //    [e.target.name]: e.target.value 
   // })
   // }

   handleClick = (e) => {
      console.log("Button was clicked");
      
   }
   
   handleSubmit = (e) => {
      console.log("Form was submited");
      console.log(this.state);
      e.preventDefault()
   }
   render(){
      return(
         <div>
            <h1>New Attendant</h1>
            <form action="" onSubmit={this.handleSubmit}>
               <div className="form-group">
                  <label htmlFor="">Firs Name</label>
                  <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
               </div>
               <div className="form-group">
                  <label htmlFor="">Last Name</label>
                  <input onChange={this.props.onChange} className="form-control" type="text" name="lastName"value={this.props.formValues.lastName}/>
               </div>
               <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
               </div>
               <div className="form-group">
                  <label htmlFor="">Job title</label>
                  <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
               </div>
               <div className="form-group">
                  <label htmlFor="">Twitter</label>
                  <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
               </div>
               <button  onClick={this.handleClick} className="btn btn-primary">Save</button>
            </form>
         </div>
      )
   }
}

export default BadgeForm