const axios = require('axios');
const { serverURL } = require('./serverInfo');

/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o dodanie nowej lokalizacji.
 * @function Creq_addNewLocation
 * @param {object} params Zbiór parametrów w postaci obiektu.
 * @category Creq
 */


function Creq_addNewLocation(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/addNewLocation`, params)
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
    Creq_addNewLocation,
};