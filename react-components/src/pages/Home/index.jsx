/* eslint-disable no-undef */
import React from 'react'
import CardList from '../../components/CardList'
import Header from '../../components/Header'

const Home = () => {
 return (
  <>
    <Header />
    <CardList list={petsFromServer}/>
  </>
 )
}

export default Home