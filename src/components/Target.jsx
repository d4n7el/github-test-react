import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Target = ({ avatar, created_at, description, id, login }) => {
    return (
        <div className="col-12 col-sm-6">
            <div className="card cardGist mb-3">
                <div className="top-right-absolute d-flex justify-content-end">
                    <Link to={`/gists/${id}`}><FontAwesomeIcon icon="eye" /></Link>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={avatar} className="card-img" alt={login} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{ login || "*Anonymous*"}</h5>
                            { description !== null && (
                                <p className="card-text text-muted">{description.substring(0,70)}</p>
                            )}
                            { description === "" && (
                                <p className="card-text text-muted">{"Sin Asignar descripción"}</p>
                            )}
                            <p className="card-text"><small className="text-muted">{created_at}</small></p>
                            <p className="card-text"><small className="text-muted">{id}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Target.proptype = {
    data: PropTypes.object.isrequired,
    login: PropTypes.string.isrequired
}

Target.defaultProps = {
    login: "*Anonymous*"
}

export default Target