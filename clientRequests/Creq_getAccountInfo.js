const axios = require('axios');
const { serverURL } = require('./serverInfo');

/** W przyszłości możliwe że dojdzie do standaryzacji Creq */

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