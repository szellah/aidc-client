const axios = require('axios');
const { serverURL } = require('./serverInfo');

function Creq_test (reqId){
return new Promise((resolve, reject) => {
    if(parseInt(reqId)){
    axios.post(`${serverURL}/test`, {
        id: parseInt(reqId)
    })
    .then(res => {
        console.log(res.data);
        resolve(res.data);
    })
    .catch(error => {
        console.error(error)
    })
}
else{
    reject("to nie jest liczba");
}
});

}

  module.exports={
    Creq_test,
};