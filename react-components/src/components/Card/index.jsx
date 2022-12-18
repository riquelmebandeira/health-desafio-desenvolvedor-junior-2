import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Card = (props) => {
  const {name, type, breed, picture} = props

 return (
  <div className='card'>
    <img className='card__picture mb-tiny' src={picture} alt={name} />
    <h4 className="card__title mb-small">{name}</h4>
    <p className="card__details mb-medium">{`${type} • ${breed}`}</p>
    <button className="button button--ghost">Ver detalhes</button>
  </div>
 )
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  age: PropTypes.number,
  type: PropTypes.string,
  breed: PropTypes.string,
  picture: PropTypes.string,
  ownerId: PropTypes.number
}

export default Card