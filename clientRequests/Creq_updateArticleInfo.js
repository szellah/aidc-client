const axios = require('axios');
const { serverURL } = require('./serverInfo');


/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o aktualizacje informacji o artykule.
 * @function Creq_updateArticleInfo
 * @param {object} params Zbiór parametrów w postaci obiektu.
 * @category Creq
 */
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