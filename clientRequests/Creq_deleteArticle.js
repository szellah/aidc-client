const axios = require('axios');
const { serverURL } = require('./serverInfo');

/** W przyszłości możliwe że dojdzie do standaryzacji Creq */
/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o usunięcie artykułu.
 * @function Creq_deleteArticle
 * @param {object} params Zbiór parametrów w postaci obiektu.
 * @category Creq
 */
function Creq_deleteArticle(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/deleteArticle`, params)
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
    Creq_deleteArticle,
};