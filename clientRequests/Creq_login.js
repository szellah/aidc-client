const axios = require("axios");
const {serverURL} = require("./serverInfo");

const SHA256 = require("crypto-js/sha256");

/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o zalogowanie się do apliakcji.
 * @function Creq_login
 * @param {object} username - nazwa użytownika
 * @param {object} password - hasło użytkownika
 */

function Creq_login(username, password) {
    return new Promise((resolve, reject) => {
        // Tutaj zmienic adres ip
        axios.post(`${serverURL}/login`, {
            username: username,
            password: SHA256(password).toString()
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





















