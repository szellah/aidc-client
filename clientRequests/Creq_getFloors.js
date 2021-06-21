const axios = require('axios');
const { serverURL } = require('./serverInfo');

/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o informacje o piętrach budynku.
 * @function Creq_getFloors
 * @param {object} params Zbiór parametrów w postaci obiektu.
 * @category Creq
 */

function Creq_getFloors(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/getFloors`, params)
    .then(res => {
        resolve(res.data);
    })
    .catch(error => {
        reject(error);
    })

});

}

  module.exports={
    Creq_getFloors,
};