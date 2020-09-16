import React from 'react'
import ReactDOM from 'react-dom'

// importamos los componentes
import Badge from './components/Badge'

// una vez instalado bootstrap atravez de npm lo importamos de forma defrente sin from ya que lo utilizaremos
import 'bootstrap/dist/css/bootstrap.min.css'

// traemos los estylos globales que creamos
import './global.css'

const container = document.getElementById('app')
ReactDOM.render(<Badge
                  firsName="Ramos Garcia"
                  lastName="Jeyson Gino"
                  avatarUrl = "https://www.gravatar.com/avatar?id=identicon"
                  jobTitle = "Junior Developer Web"
                  twitter = "No tiwter"
                  />,container)