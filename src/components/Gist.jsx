import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from "react-router-dom";
import { getGistId } from '../utilidades/gist';
import Load from  './Load'
import GistInfo from  './GistInfo'
import FilesView from  './FilesView'

const Gist = () => {
    const { id } = useParams()
    const [status, setStatus] = useState(0);
    const [data, setData] = useState(null);
    const [files, setFiles]= useState({});
    
    useEffect (() => {

        const getData = async () => {
            const dataGist = await getGistId(id);
            setStatus(dataGist.status)
            setData(dataGist.data)
            setFiles(dataGist.data.files)
        }

        getData();
    }, [] )

    return (
        <div className="col-12">
            { status ===  0 && (
               <Load message = "Estamos preprando la Información" />
            )}
            { status ===  404 && (
               <Load message = "Se presento un error al realizar la solictud, verifique su conexion." />
            )}

            { status ===  400 && (
               <Load message = "Se presento un error al realizar la solictud, verifique su conexion." />
            )}
            
            { status >=  200 && status <= 205 && data != null && (
                <GistInfo files={data.files} git_pull_url={data.git_pull_url} id={data.id} owner={data.owner} created_at={data.created_at} login={data.owner.login} description={data.description} />
            )}

            <div className="col-12 text-center top-1 title container-shadow-one" >
                <h4>Listado de archivos</h4>
            </div>
            
            { status >=  200 && status <= 205 && data != null && (
                <div className="row">
                    {Object.keys(files).map(( item, i ) => {
                        return  <FilesView  key={i +"_"+ item} data={files[item]} login={data.owner.login} />
                    })}
                </div>
            )}
        </div>
    )
}

export default Gist