import React from 'react'
import ReactDOM from 'react-dom'
import Home from './src/pages/Home'
import './src/styles/global.scss'

const renderHome = (container, settings) => {
  // eslint-disable-next-line react/no-render-return-value
  return ReactDOM.render(
    <Home {...settings} />,
    document.querySelector(container)
  )
}

export { renderHome }
