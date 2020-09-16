import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const GistInfo = ({ owner, created_at ,login,description ,id, git_pull_url }) => {
    const { avatar_url } = owner;
    return (
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-sm-3">
                        <img className="container-shadow-one card-img-top"  src={avatar_url} width="50" alt="..." />
                    </div>
                    <div className="col-12 col-sm-9 d-flex align-items-center">
                        <div className="row">
                            <div className="col-3 Top-1">
                                <small className="text-muted font-1 ">Usuario:    </small> 
                            </div>
                            <div className="col-9 Top-1">
                                <strong className="">{login || "*Anonymous*" }</strong>
                            </div>

                            <div className="col-3 Top-1">
                                <small className="text-muted font-1 ">ID:    </small> 
                            </div>
                            <div className="col-9 Top-1">
                                <strong className="">{id}</strong>
                            </div>

                            <div className="col-3 Top-1">
                                <small className="text-muted font-1 ">Fecha:    </small> 
                            </div>
                            <div className="col-9 Top-1">
                                <strong className="">{created_at}</strong>
                            </div>

                            <div className="col-3 Top-1">
                                <small className="text-muted font-1 ">Descripción:    </small> 
                            </div>
                            <div className="col-9 Top-1">
                                <strong className="">{description || "Sin Asignar descripción" }</strong>
                            </div>

                            <div className="col-12">
                                <hr/>
                            </div>
                            
                            <div className="col-12 d-flex align-items-start">
                                <a href={git_pull_url} target="_blank" className="btn container-shadow-one">{ "Visitar Proyecto"}</a>
                                <a href={"https://gist.github.com/"+login} target="_blank" className="btn container-shadow-one left-1">{ "Visitar Perfil de " + login}</a>
                                <Link to="/gists" className="btn container-shadow-one left-1" >Regresar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

GistInfo.proptype = {
    owner: PropTypes.object.isrequired,
    created_at: PropTypes.string.isrequired,
    login: PropTypes.string.isrequired,
    description: PropTypes.string.isrequired,
    id: PropTypes.string.isrequired,
    git_pull_url: PropTypes.string.isrequired
}

GistInfo.defaultProps = {
    login: "*Anonymous*"
}

export default GistInfo