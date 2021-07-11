const axios = require('axios');
const { serverURL } = require('./serverInfo');


/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o zmiane hasła użytkownika.
 * @function Creq_changeAccountPassword
 * @param {object} params Zbiór parametrów w postaci obiektu.
 * @category Creq
 */
function Creq_changeAccountPassword(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/changeAccountPassword`, params)
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
    Creq_changeAccountPassword,
};