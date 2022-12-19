import React from 'react'
import Button from '../Button'
import './styles.scss'

const Header = () => {
 return (
   <header className="header">
     <a href="/pets" className="header__logo">TechCare</a>
     <Button innerText="Sair" ghost />
   </header>
 )
}

export default Header