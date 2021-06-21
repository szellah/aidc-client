const axios = require('axios');
const { serverURL } = require('./serverInfo');

/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o informacje o kategoriach artykułów.
 * @function Creq_getArticleCategories
 */
function Creq_getArticleCategories(){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/getArticleCategories`, {})
    .then(res => {
        resolve(res.data);
    })
    .catch(error => {
        reject(error);
    })

});

}

  module.exports={
    Creq_getArticleCategories,
};