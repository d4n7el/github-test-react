import React, { useState, useEffect } from 'react'
import { getGist } from  '../utilidades/gist'
import Load from  './Load'
import Target from  './Target'

const TargetGist = () => {
    
    const [status, setStatus] = useState(0);
    const [data, setData] = useState([]);

    useEffect (() => {

        const getDataList = async () => {
            try{
                const dataGist = await getGist();
                setStatus(dataGist.status);
                setData(dataGist.data)
            }catch (err) {
               console.log("No carga");
            }
        }

        getDataList();
    }, [] )
 
    return (
        <div className="targets">
            { status === 0 && (
               <Load message = "Estamos preprando la Información" />
            )}
            {data.map(({url, id, owner, created_at, description }) => {
                console.log(data)
                return  <Target  key={id} id={id} avatar={owner.avatar_url} created_at={created_at} login={owner.login} description={description}/>
            })}
        </div>
    )
}

export default TargetGist