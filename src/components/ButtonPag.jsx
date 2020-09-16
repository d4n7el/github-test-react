import React from 'react'
import PropTypes from 'prop-types'

const ButtonPage = ({text, type, clickHandler}) => {
    return (
    <button className={type} onClick= { clickHandler.bind(this,text) }>
        <span>{text}</span>
    </button>
    )
}

ButtonPage.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

ButtonPage.defaultProps = {
    text: "Sin Asignar texto",
    type: "btn"
}

export default ButtonPage