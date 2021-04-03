const { Creq_getAccountInfo } = require('./Creq_getAccountInfo');
const { Creq_getAccountReport } = require('./Creq_getAccountReport');
const { Creq_test } = require('./Creq_test');


module.exports={
    getAccountInfo: Creq_getAccountInfo,
    getAccountReport: Creq_getAccountReport,
    test: Creq_test,
}