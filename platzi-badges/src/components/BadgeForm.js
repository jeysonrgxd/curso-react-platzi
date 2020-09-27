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

   // handleClick = (e) => {
   //    console.log("Button was clicked");
      
   // }
   
   // handleSubmit = async (e) => {
   //    e.preventDefault()
   // }
   render(){
      return(
         <div>
            
            <form action="" onSubmit={this.props.onSubmit}>
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
               <div className="d-flex align-items-center gap-general">
                  <button className="btn btn-primary">Save</button>
                  {/* asemos una condicional que si existe el error que le pasamos en el prop me mostrara una ventanita de error */}
                  {this.props.error && 
                     <div className="mt-3 alert alert-danger mb-3" role="alert">
                        {this.props.error.message}
                     </div>
                  }
               </div>
            </form>
         </div>
      )
   }
}

export default BadgeForm