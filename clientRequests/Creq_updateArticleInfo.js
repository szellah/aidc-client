const axios = require('axios');
const { serverURL } = require('./serverInfo');

/** W przyszłości możliwe że dojdzie do standaryzacji Creq */

function Creq_updateArticleInfo(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/updateArticleInfo`, params)
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
    Creq_updateArticleInfo,
};