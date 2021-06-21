const axios = require('axios');
const { serverURL } = require('./serverInfo');


/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o zalogowanie się do apliakcji.
 * @function Creq_allocateArticle
 * @param {object} LocationId - ID lokalizacji
 * @param {object} ArticleId - ID artykułu
 * @category Creq
 */
function Creq_allocateArticle({LocationId, ArticleId}){
    return new Promise((resolve, reject) => {
        if(parseInt(LocationId) && parseInt(ArticleId)){
        axios.post(`${serverURL}/allocateArticle`, {
            LocationId: parseInt(LocationId),
            ArticleId: parseInt(ArticleId),
        })
        .then(res => {
            console.log(res.data);
            resolve(res.data);
        })
        .catch(error => {
            reject({error: true, message: error.message});
        })
    }
    else{
        reject({error: true, message: "to nie jest liczba"});
    }
    });

}

  module.exports={
    Creq_allocateArticle,
};