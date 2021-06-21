const axios = require('axios');
const { serverURL } = require('./serverInfo');

/** W przyszłości możliwe że dojdzie do standaryzacji Creq */

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