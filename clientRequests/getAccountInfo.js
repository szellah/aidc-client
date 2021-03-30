const axios = require('axios');
const { serverURL } = require('./serverInfo');

function getAccountInfo (reqId){
return new Promise((resolve, reject) => {
    if(parseInt(reqId)){
    axios.post(`${serverURL}`, {
        id: parseInt(reqId)
    })
    .then(res => {
        const {Imie, Nazwisko} =  res.data;
        resolve({Imie, Nazwisko});
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
    getAccountInfo: getAccountInfo,
};