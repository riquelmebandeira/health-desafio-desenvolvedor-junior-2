import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import './styles.scss'
import Button from '../../components/Button'

const PetDetails = (props) => {
  const {id, age, name, type, breed, picture, owner} = props.petDetails

  const handleDelete = async () => {
    try {
      const response = await fetch(`/pets/${id}`, { method: 'DELETE' })
      if (response.ok) {
        document.location.href = '/pets'
      }
    } catch (error) {
      /** */
    }
  }

 return (
   <>
    <Header />
    <main className='pet-details'>
      <img className='pet-details__picture' src={picture} alt={name} />
      <div className="pet-details__container">
        <section className="pet-info">
          <h3 className="pet-info__name mb-large">{name}</h3>
          <ul className="pet-info__list mb-large">
            <li>
              <span>{type}</span>
            </li>
            <li>
              <span>{breed}</span>
            </li>
            <li>
              <span>{age} anos de idade</span>
            </li>
          </ul>
        </section>

        <section className="owner-info">
          <div className="information">
            <span className="information__title">Dono(a)</span>
            <p className="information__value">{`${owner.firstName} ${owner.lastName}`}</p>
          </div>
          <div >
            <span className="information__title">Telefone</span>
            <p className="information__value">{owner.telephone}</p>
          </div>
        </section>
      </div>
      <Button innerText="Apagar pet" onClick={handleDelete} />
    </main>
   </>
  )
}

PetDetails.propTypes = {
  petDetails: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    type: PropTypes.string,
    breed: PropTypes.string,
    picture: PropTypes.string,
    ownerId: PropTypes.number,
    owner: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      telephone: PropTypes.string
    })
  })
}

export default PetDetails