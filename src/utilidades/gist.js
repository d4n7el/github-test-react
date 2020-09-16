import Axios from 'axios'

const getGist = async (page = 2, per_page = 20) => {
    
    var dataRetorno = {
        error: true,
        status: 0,
        statusText: "",
        data: {}
    };

    try{
        const data = await Axios.get(`//api.github.com/gists?page=${page}&per_page=${per_page}`);
        dataRetorno.error = (data.status >= 200 && data.status <= 205) ? false : true;
            
        dataRetorno.data = data.data;
        dataRetorno.status = data.status;
        dataRetorno.statusText = "OK";
    }catch (error) {
        if (error.response) {
            dataRetorno.status = 400;
            dataRetorno.statusText = "Se presento un error al realizar la solictud, verifique su conexion.";
        } else if (error.request) {
            dataRetorno.status = 404;
            dataRetorno.statusText = "El servidor no responde";
        }else {
            console.log('Error', error.message);
        }
    }
    return dataRetorno;
}

const getGistId = async (id) => {
    var ruta = `https://api.github.com/gists/${id}`;
    var dataRetorno = {
        error: true,
        status: 0,
        statusText: "",
        data: {}
    };

    try{
        const data = await Axios.get(ruta);
        dataRetorno.error = (data.status >= 200 && data.status <= 205) ? false : true;

        dataRetorno.data = data.data;
        dataRetorno.status = data.status;
        dataRetorno.statusText = "OK";

    }catch (error) {
        if (error.response) {
            dataRetorno.status = 400;
            dataRetorno.statusText = "Se presento un error al realizar la solictud, verifique su conexion.";
        } else if (error.request) {
            dataRetorno.status = 404;
            dataRetorno.statusText = "El servidor no responde";
        }else {
            console.log('Error', error.message);
        }
    }

    return dataRetorno;
}

export {
    getGist,
    getGistId
}