const axios = require('axios');
const { serverURL } = require('./serverInfo');


/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o aktualizacje informacji o lokalizacji.
 * @function Creq_updateLocationInfo
 * @param {object} params Zbiór parametrów w postaci obiektu.
 * @category Creq
 */
function Creq_updateLocationInfo(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/updateLocationInfo`, params)
    .then(res => {
        console.log(res.data);
        resolve(res.data);
    })
    .catch(error => {
        reject({error: true, message: error.message});
    })

});

}

  module.exports={
    Creq_updateLocationInfo,
};