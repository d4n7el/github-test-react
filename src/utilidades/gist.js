import Axios from 'axios'

const getGist = async () => {
    
    var dataRetorno = {
        error: true,
        status: 0,
        data: {}
    };

    try{
        const data = await Axios.get('//api.github.com/gists/public');
        dataRetorno.error = (data.status >= 200 && data.status <= 205) ? false : true;
            
        dataRetorno.data = data.data;
        dataRetorno.status = data.status;
    }catch (error) {
        if (error.response) {
            dataRetorno.status = 400;

        } else if (error.request) {
            dataRetorno.status = 404;
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
        data: {}
    };

    try{
        const data = await Axios.get(ruta);
        dataRetorno.error = (data.status >= 200 && data.status <= 205) ? false : true;

        dataRetorno.data = data.data;
        dataRetorno.status = data.status;
    }catch (error) {
        if (error.response) {
            dataRetorno.status = 400;
        } else if (error.request) {
            dataRetorno.status = 404;
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