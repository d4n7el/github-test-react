import React from 'react'

const Load = ({message}) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary " role="status">
            
            </div>
            <span className="text-muted left-2">{ message }</span>
        </div>
    )
}

export default Load