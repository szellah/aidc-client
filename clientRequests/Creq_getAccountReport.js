const axios = require('axios');
const { serverURL } = require('./serverInfo');


/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o raport konta.
 * @function Creq_getAccountReport
 * @category Creq
 */
function Creq_getAccountReport(){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/getAccountReport`, {})
    .then(res => {
        // console.log(res.data);
        resolve(res.data);
    })
    .catch(error => {
        reject({error: true, message: error.message});
    })

});

}

  module.exports={
    Creq_getAccountReport,
};