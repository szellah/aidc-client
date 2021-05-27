const { Creq_getAccountInfo } = require('./Creq_getAccountInfo');
const { Creq_getAccountReport } = require('./Creq_getAccountReport');
const {Creq_login} = require("./Creq_login");
const { Creq_test } = require('./Creq_test');


module.exports={
    getAccountInfo: Creq_getAccountInfo,
    getAccountReport: Creq_getAccountReport,
    login: Creq_login,
    test: Creq_test,
}