import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// importamos las dos paginas que bamos a linkear con nuestro router
import Layout from './Layout'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import Home from '../pages/Home'
import NotFound404 from '../pages/NotFound4040'

/*
Otra forma de hacer que todas tus URL’s que no existan sean redirigidas a tu componente de 404 sería de la siguiente forma:
import { Redirect, Route } from "react-router-dom";

<Route path="/404" component={MiComponente404} />
<Redirect from="*" to="/404" />

Como podemos observar llamamos a nuestro componente 404 y luego utilizamos Redirect, el cual es un componente de React Router para hacer redirecciones; en este caso hacemos que todas las URL’s que no correspondan a alguna que hayamos declarado, sean redirigidas a MiComponente404.

*/

function App (){
 
   return(
      // IMPORTANTO RECORDAR QUE TODO ESTO FUNCIONA MEDIANTE LA NAVEGACION CON URL DE LA WEB
      // emglobamos todo dentro de este componente para poder recrear un spa,
      // luego el switch es para definir que ruta le pertenece su page y que no hayga error
      //Route es para que nos mande y funcione el spa renderizando
      <BrowserRouter>
      <Layout>
         <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/badges" component={Badges}/>
            <Route exact path="/badges/new" component={BadgeNew}/>
            <Route component={NotFound404}/>
         </Switch>
      </Layout>
      </BrowserRouter>
   )
   
}

export default App