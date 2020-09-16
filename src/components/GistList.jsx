import React, { useState, useEffect } from 'react'
import { getGist } from  '../utilidades/gist'
import Target from  './Target'
import Message from  './Message'
import Button from  './ButtonPag'

const TargetGist = () => {
    const [status, setStatus] = useState(0);
    const [data, setData] = useState([]);
    const [statusText, setStatusText] = useState("Estamos cargando la Información");
    const [page, setPage] = useState(1);

    const nextPage = () => {
        setStatus(0);
        setStatusText()
        setPage(page + 1)
    }

    const previousPage = () => {
        if(page > 0){
            setStatus(0);
            setStatusText()
            setPage(page - 1)
        }
    }

    useEffect (() => {
        const getDataList = async () => {
            const dataGist = await getGist(page);
            setStatus(dataGist.status);
            setData(dataGist.data)
            setStatusText(dataGist.statusText)
        }
        getDataList();
    }, [page] )
 
    return (
        <div className="targets row">

            <div className="col-12 text-center top-1 title container-shadow-one" >
                <h4>Listado de Gists</h4>
            </div>

            <div className="col-12 d-flex justify-content-center Top-1 bottom-1">
                <Button type="btn container-shadow-one" text="Anterior" clickHandler={previousPage}/>
                <span className="badge badge-dark numberPage d-flex justify-content-center align-items-center">{page}</span>
                <Button type="btn container-shadow-one" text="Siguiente" clickHandler={nextPage}/>
            </div>

            <Message status={status} statusText={statusText}/>

            { status >= 200 && status <= 205 && (
                data.map(({url, id, owner, created_at, description }) => {
                    return  <Target  key={id} id={id} avatar={owner.avatar_url} created_at={created_at} login={owner.login} description={description} />
                })
            )}
        </div>
    )
}

export default TargetGist