const axios = require('axios');
const { serverURL } = require('./serverInfo');

/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o wysłanie nowego hasła użytkownika na maila.
 * @function Creq_getFloors
 * @param {object} params Zbiór parametrów w postaci obiektu.
 */

function Creq_forgotPassword(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/forgotPassword`, params)
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
    Creq_forgotPassword,
};