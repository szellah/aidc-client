const axios = require('axios');
const { serverURL } = require('./serverInfo');

/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o informacje o budynku.
 * @function Creq_getBuildings
 * @category Creq
 */

function Creq_getBuildings(){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/getBuildings`, {})
    .then(res => {
        resolve(res.data);
    })
    .catch(error => {
        reject(error);
    })

});

}

  module.exports={
    Creq_getBuildings,
};