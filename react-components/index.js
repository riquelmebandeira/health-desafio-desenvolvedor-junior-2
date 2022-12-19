import React from 'react'
import ReactDOM from 'react-dom'
import Home from './src/pages/Home'
import PetDetails from './src/pages/PetDetails'
import './src/styles/global.scss'

const renderHome = (container, props) => {
  return ReactDOM.render(<Home {...props} />, document.querySelector(container))
}

const renderPetDetails = (container, props) => {
  return ReactDOM.render(
    <PetDetails {...props} />,
    document.querySelector(container)
  )
}

export { renderHome, renderPetDetails }
