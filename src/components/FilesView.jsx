import React from 'react'

const FilesView = ({ data, login }) => {
    const {  filename, raw_url, language, type  } = data;
    return (
        <div className="vistaArchivo col-12 Top-1">
            <div className="row">
                <div className="col-12 d-flex justify-content-center Top-1">
                    <span>
                        <a className="btn btn-enlace-blue" target="_Blank" href={"https://gist.github.com/"+login}>{login} </a>
                        / <a className="btn btn-enlace-green" target="_Blank" href={raw_url}>/{ filename || "Sin asignar nombre de archivo"}</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FilesView