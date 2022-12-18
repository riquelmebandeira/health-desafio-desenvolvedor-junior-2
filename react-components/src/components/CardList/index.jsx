import React from 'react'
import PropTypes from 'prop-types';
import Card from '../Card'
import './styles.scss'

const CardList = ({list}) => {
 return (
   <section className="card-list">
     {
       list.length > 0 && (
         list.map((pet) => (
           <Card key={pet.id} {...pet}/>
         ))
       )
     }
   </section>
 )
}

CardList.propTypes = {
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

export default CardList