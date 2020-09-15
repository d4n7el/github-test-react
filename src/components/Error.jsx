import React from 'react'
import Load from  './Load'

const Error = ({ status, statusText }) => {
    return (
        status >= 400 || status === 0 && (
            <Load message={statusText} />
        )
    )
}

export default Error