import Axios from 'axios'

const getGist = async () => {
    
    var dataRetorno = {
        error: false,
        statusText: "",
        status: 200,
        data: {}
    };

    const data = await Axios.get('//api.github.com/gists/public');
    dataRetorno.error = (data.status >= 200 && data.status <= 205) ? false : true;
         
    dataRetorno.statusText = data.statusText;
    dataRetorno.data = data.data;
    dataRetorno.status = data.status;
    return dataRetorno;
}

export {
    getGist
}