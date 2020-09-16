import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, type, clickHandler}) => {
    return (
    <button className={type} onClick= { clickHandler.bind(this,text) }>
        <span>{text}</span>
    </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    text: PropTypes.string.isRequired
}

export default Button