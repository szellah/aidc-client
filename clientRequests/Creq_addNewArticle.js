const axios = require('axios');
const { serverURL } = require('./serverInfo');

/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o dodanie nowego artykułu.
 * @function Creq_addNewArticle
 * @param {object} params Zbiór parametrów w postaci obiektu.
 * @category Creq
 */

function Creq_addNewArticle(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/addNewArticle`, params)
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
    Creq_addNewArticle,
};