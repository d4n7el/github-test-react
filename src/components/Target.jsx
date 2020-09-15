import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Target = ({ avatar, created_at, description, id, login }) => {
    console.log(description)
    return (
        <div className="col-6">
            <div className="card cardGist mb-3">
                <div className="top-right-absolute d-flex justify-content-end">
                    <Link  to="/"><FontAwesomeIcon icon="eye" /></Link>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={avatar} className="card-img" alt="..." />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Target