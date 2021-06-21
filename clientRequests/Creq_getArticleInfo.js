const axios = require('axios');
const { serverURL } = require('./serverInfo');


/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o informacje o artykule.
 * @function Creq_getArticleInfo
 * @param {object} reqId - ID artykułu
 * @category Creq
 */
function Creq_getArticleInfo (reqId){
return new Promise((resolve, reject) => {
    if(parseInt(reqId)){
    axios.post(`${serverURL}/getArticleInfo`, {
        articleId: parseInt(reqId)
    })
    .then(res => {
        console.log(res.data);
        
        if(res.data.error)
        {
            throw new Error(res.data.message);
        }
        else
        {
            resolve(res.data);
        }
                
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