import React from 'react'
import './styles.scss'

const Header = () => {
 return (
   <header className="header">
     <h1 className="header__logo">TechCare</h1>
     <button className="button button--ghost">Sair</button>
   </header>
 )
}

export default Header