const axios = require('axios');
const { serverURL } = require('./serverInfo');

function getAccountInfo (reqId){
return new Promise((resolve, reject) => {
    if(parseInt(reqId)){
    axios.post(`${serverURL}`, {
        id: parseInt(reqId)
    })
    .then(res => {
        const {Name, Surname} =  res.data;
        console.log(res.data);
        resolve(`${Name} ${Surname}`);
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