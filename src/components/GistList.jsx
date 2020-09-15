import React, { useState, useEffect } from 'react'
import { getGist } from  '../utilidades/gist'
import Target from  './Target'
import Error from  './Error'

const TargetGist = () => {
    
    const [status, setStatus] = useState(0);
    const [data, setData] = useState([]);
    const [statusText, setStatusText] = useState("Estamos cargando la Información");

    useEffect (() => {

        const getDataList = async () => {
            const dataGist = await getGist();
            setStatus(dataGist.status);
            setData(dataGist.data)
            setStatusText(dataGist.statusText)
        }

        getDataList();
    }, [] )
 
    return (
        <div className="targets row">

            <div className="col-12 text-center top-1 title container-shadow-one" >
                <h4>Listado de Gists</h4>
            </div>

            <Error status={status} statusText={statusText}/>
        
            { status >= 200 && status <= 205 && (
                data.map(({url, id, owner, created_at, description }) => {
                    return  <Target  key={id} id={id} avatar={owner.avatar_url} created_at={created_at} login={owner.login} description={description} />
                })
            )}
        </div>
    )
}

export default TargetGist