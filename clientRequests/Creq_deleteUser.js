const axios = require('axios');
const { serverURL } = require('./serverInfo');


/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o usunięcie użytkownika.
 * @function Creq_deleteUser
 * @param {object} params Zbiór parametrów w postaci obiektu.
 * @category Creq
 */
function Creq_deleteUser(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/deleteUser`, params)
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
    Creq_deleteUser,
};