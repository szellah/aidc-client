const axios = require('axios');
const { serverURL } = require('./serverInfo');

/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o informacje o pokojach.
 * @function Creq_getRooms
 * @param {object} params Zbiór parametrów w postaci obiektu.
 */
function Creq_getRooms(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/getRooms`, params)
    .then(res => {
        resolve(res.data);
    })
    .catch(error => {
        reject(error);
    })

});

}

  module.exports={
    Creq_getRooms,
};