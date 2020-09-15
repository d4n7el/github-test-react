import React, { useState, useEffect } from 'react'
import { getGist } from  '../utilidades/gist'
import Load from  './Load'
import Target from  './Target'

const TargetGist = () => {
    
    const [status, setStatus] = useState(0);
    const [data, setData] = useState([]);

    useEffect (() => {

        const getDataList = async () => {
            const dataGist = await getGist();
            setStatus(dataGist.status);
            setData(dataGist.data)
        }

        getDataList();
    }, [] )
 
    return (
        <div className="targets row">

            <div className="col-12 text-center top-1 title container-shadow-one" >
                <h4>Listado de Gists</h4>
            </div>

            { status ===  0 && (
               <Load message = "Estamos preprando la Información" />
            )}
            { status ===  404 && (
               <Load message = "Se presento un error al realizar la solictud, verifique su conexion." />
            )}

            { status ===  400 && (
               <Load message = "Se presento un error al realizar la solictud, verifique su conexion." />
            )}

            { status >= 200 && status <= 205 && (
                data.map(({url, id, owner, created_at, description }) => {
                    return  <Target  key={id} id={id} avatar={owner.avatar_url} created_at={created_at} login={owner.login} description={description} />
                })
            )}
        </div>
    )
}

export default TargetGist