const { Sres_getAccountInfo } = require('./Sres_getAccountInfo');
const { Sres_getAccountReport } = require('./Sres_getAccountReport');
const { Sres_test } = require('./Sres_test');
const { Sres_addNewUser } = require('./Sres_addNewUser');
const { Sres_deleteUser } = require('./Sres_deleteUser');
const { Sres_updateUser } = require('./Sres_updateUser');



module.exports={
    test: Sres_test,
    getAccountInfo: Sres_getAccountInfo,
    getAccountReport: Sres_getAccountReport,
    addNewUser: Sres_addNewUser,
    deleteUser: Sres_deleteUser,
    updateUser: Sres_updateUser,
}