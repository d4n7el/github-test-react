import React from 'react'
import Load from  './Load'

const Message = ({ status, statusText }) => {
    return (
        status >= 400 || status === 0 && (
            <div className="col-12">
                <Load />
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <span className="text-muted left-2 text-center">{ statusText }</span>
                    </div>
                </div>
                
            </div>
        )
    )
}

export default Message