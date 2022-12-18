import React from 'react'
import PropTypes from 'prop-types'
import CardList from '../../components/CardList'
import Header from '../../components/Header'

const Home = ({list = []}) => {
 return (
  <>
    <Header />
    <CardList list={list}/>
  </>
 )
}

Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    type: PropTypes.string,
    breed: PropTypes.string,
    picture: PropTypes.string,
    ownerId: PropTypes.number
  }))
}

export default Home