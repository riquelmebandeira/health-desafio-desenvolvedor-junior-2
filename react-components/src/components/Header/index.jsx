import React from 'react'
import './styles.scss'

const Header = () => {
 return (
   <header className="header">
     <a href="/pets" className="header__logo">TechCare</a>
     <button className="button button--ghost">Sair</button>
   </header>
 )
}

export default Header