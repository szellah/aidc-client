const axios = require('axios');
const { serverURL } = require('./serverInfo');

/** W przyszłości możliwe że dojdzie do standaryzacji Creq */

function Creq_getArticleInfo (reqId){
return new Promise((resolve, reject) => {
    if(parseInt(reqId)){
    axios.post(`${serverURL}/getArticleInfo`, {
        articleId: parseInt(reqId)
    })
    .then(res => {
        console.log(res.data);
        resolve(res.data);
    })
    .catch(error => {
        reject(error);
    })
}
else{
    reject(new Error("to nie jest liczba"));
}
});

}

  module.exports={
    Creq_getArticleInfo,
};