import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Button = ({innerText, ghost, onClick}) => {
  return (
    <button
      className={`button ${ghost && 'button--ghost'}`}
      onClick={onClick}
    >
      {innerText}
    </button>
  )

}

Button.propTypes = {
  innerText: PropTypes.string,
  ghost: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button