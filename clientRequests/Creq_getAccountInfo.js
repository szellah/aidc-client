const axios = require('axios');
const { serverURL } = require('./serverInfo');


/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o informacje o użytkowniku.
 * @function Creq_getAccountInfo
 * @param {object} reqId - ID użytkownika
 * @category Creq
 */
function Creq_getAccountInfo (reqId){
return new Promise((resolve, reject) => {
    if(parseInt(reqId)){
    axios.post(`${serverURL}/getAccountInfo`, {
        accountId: parseInt(reqId)
    })
    .then(res => {
        console.log(res.data);
        resolve(res.data);
    })
    .catch(error => {
        console.error(error)
    })
}
else{
    reject("to nie jest liczba");
}
});

}

  module.exports={
    Creq_getAccountInfo,
};