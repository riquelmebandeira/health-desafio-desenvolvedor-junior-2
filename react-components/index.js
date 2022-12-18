import React from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './src/App'
import ReactDOM from 'react-dom'
import Home from './src/pages/Home'
import './src/styles/global.scss'

// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<App />)

const renderHome = (container, settings) => {
  // eslint-disable-next-line react/no-render-return-value
  return ReactDOM.render(
    // eslint-disable-next-line no-undef
    <Home />,
    document.querySelector(container)
  )
}

export { renderHome }
