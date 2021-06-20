const axios = require('axios');
const { serverURL } = require('./serverInfo');

/** W przyszłości możliwe że dojdzie do standaryzacji Creq */

function Creq_getArticleReport(params){
return new Promise((resolve, reject) => {
    const {reportChoice, building, floor, room, category} = params;

    let message = reportChoice ? false : "Nie wybrano według czego stworzyć raport"



    if(reportChoice==="Kategoria")
        message = category ? false : "Nie wybrano kategorii";

    if(reportChoice==="Budynek")
        message = building ? false : "Nie wybrano budynku";

    if(reportChoice==="Piętro")
        message = floor ? building ? false : "Nie wybrano budynku" : "Nie wybrano pietra";

    if(reportChoice==="Pokój")
        message = room ? floor ? building ? false : "Nie wybrano budynku" : "Nie wybrano pietra" : "Nie wybrano pokoju";

    if(!message){
        axios.post(`${serverURL}/getArticleReport`, params)
        .then(res => {
            console.log(res.data);
            resolve(res.data);
        })
        .catch(error => {
            reject({error: true, message: error.message});
        })
    }
    else{
        reject({error: true, message: message});
    }

    

});

}

  module.exports={
    Creq_getArticleReport,
};