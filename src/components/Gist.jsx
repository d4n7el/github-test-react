import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { getGistId } from '../utilidades/gist';
import Load from  './Load'
import Target from  './Target'
import GistInfo from  './GistInfo'
import FilesView from  './FilesView'

const Gist = () => {
    const { id } = useParams()
    const [status, setStatus] = useState(0);
    const [data, setData] = useState(null);
    const [files, setFiles]= useState({});
    
    useEffect (() => {

        const getData = async () => {
            try{
                const dataGist = await getGistId(id);
                setStatus(dataGist.status)
                setData(dataGist.data)
                setFiles(dataGist.data.files)
            }catch (err) {
               console.log("No carga");
            }
        }

        getData();
    }, [] )

    return (
        <div className="col-12">
            { status === 0 && (
               <Load message = "Cargando la Informaión del Gist" />
            )}
            { data !== null  && (
                <GistInfo files={data.files} git_pull_url={data.git_pull_url} id={data.id} owner={data.owner} created_at={data.created_at} login={data.owner.login} description={data.description} />
            )}

            <div className="col-12 text-center top-1 title container-shadow-one" >
                <h4>Listado de archivos</h4>
            </div>

            <div className="row">

                {Object.keys(files).map(( item, i ) => {
                    return  <FilesView  key={i +"_"+ item} data={files[item]} login={data.owner.login} />
                })}

            </div>
        </div>
    )
}

export default Gist