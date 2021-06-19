const axios = require('axios');
const { serverURL } = require('./serverInfo');

/** W przyszłości możliwe że dojdzie do standaryzacji Creq */

function Creq_getAccountReport(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/getAccountReport`, params)
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