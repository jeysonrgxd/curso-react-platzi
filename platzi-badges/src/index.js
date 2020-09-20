import React from 'react'
import ReactDOM from 'react-dom'

// importamos los componentes
// import Badge from './components/Badge'

// importamos la pagina
// import BadgeNew from './pages/BadgeNew'
// import Badges from './pages/Badges'
import App from './components/App'

// una vez instalado bootstrap atravez de npm lo importamos de forma defrente sin from ya que lo utilizaremos
import 'bootstrap/dist/css/bootstrap.min.css'

// traemos los estylos globales que creamos
import './global.css'

const container = document.getElementById('app')
// ReactDOM.render(<BadgeNew />,container)
ReactDOM.render(<App />,container)