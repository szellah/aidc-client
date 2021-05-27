const axios = require("axios");
const {serverURL} = require("./serverInfo");



function Creq_login(username, password) {
    return new Promise((resolve, reject) => {
        // Tutaj zmienic adres ip
        axios.post(`http://192.168.0.4:8080/login`, {
            username: username,
            password: password
        })
        .then(res => {
            console.log(res.data);
            resolve(res.data);
        })
        .catch(error => console.log(error));
    })
}



module.exports = {
    Creq_login,
};





















