import Axios from 'axios'

const getApi = async (url) => {
    var returnData = {
        error: true,
        status: 0,
        statusText: "",
        data: {}
    };

    try{
        const data = await Axios.get(url);
        returnData.error = (data.status >= 200 && data.status <= 205) ? false : true;
        returnData.statusText = (returnData.error) ? "Ocurrio un problema al realizar el proceso" : "OK";
        returnData.status = data.status;
        returnData.data = data.data;
    }catch (error) {
        if (error.response) {
            returnData.status = 400;
            returnData.statusText = "Se presento un error al realizar la solictud, verifique su conexion.";
            console.log("Se presento un error al realizar la solictud, verifique su conexion.",returnData);
        } else if (error.request) {
            returnData.status = 404;
            returnData.statusText = "El servidor no responde";
            
        }else {
            console.log('Error', error.message);
        }
    }

    return returnData;
}

const getGist = async (page = 2, per_page = 20) => {
    var url = `//api.github.com/gists?page=${page}&per_page=${per_page}`;
    const returnData = await getApi(url);
    return returnData;
}

const getGistId = async (id) => {
    var url = `https://api.github.com/gists/${id}`;
    const returnData = await getApi(url);
    return returnData;
}

export {
    getGist,
    getGistId
}