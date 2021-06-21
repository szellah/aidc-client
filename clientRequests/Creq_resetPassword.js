const axios = require('axios');
const { serverURL } = require('./serverInfo');

/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o zmianę hasła użytkownika.
 * @function Creq_getFloors
 * @param {object} params Zbiór parametrów w postaci obiektu.
 */
function Creq_resetPassword(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/resetPassword`, params)
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
    Creq_resetPassword,
};