const axios = require('axios');
const { serverURL } = require('./serverInfo');


/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o przeniesienie artykułu.
 * @function Creq_dislocateArticle
 * @param {object} params Zbiór parametrów w postaci obiektu.
 * @category Creq
 */
function Creq_dislocateArticle(params){
return new Promise((resolve, reject) => {
    axios.post(`${serverURL}/dislocateArticle`, params)
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
    Creq_dislocateArticle,
};