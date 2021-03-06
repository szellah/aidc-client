const { Creq_getAccountInfo } = require('./Creq_getAccountInfo');
const { Creq_getAccountReport } = require('./Creq_getAccountReport');

const {Creq_login} = require("./Creq_login");

const { Creq_getArticleInfo } = require('./Creq_getArticleInfo');
const { Creq_getArticleCategories} = require('./Creq_getArticleCategories');
const { Creq_updateArticleInfo } = require('./Creq_updateArticleInfo');
const { Creq_addNewArticle } = require('./Creq_addNewArticle');
const { Creq_deleteArticle } = require('./Creq_deleteArticle');
const { Creq_dislocateArticle } = require('./Creq_dislocateArticle');
const { Creq_allocateArticle } = require('./Creq_allocateArticle');
const { Creq_getArticleReport } = require('./Creq_getArticleReport');

const { Creq_getLocationInfo } = require('./Creq_getLocationInfo');
const { Creq_addNewLocation } = require('./Creq_addNewLocation');
const { Creq_updateLocationInfo } = require('./Creq_updateLocationInfo');
const { Creq_deleteLocation } = require('./Creq_deleteLocation');

const { Creq_addNewUser } = require('./Creq_addNewUser');
const { Creq_updateUserInfo } = require('./Creq_updateUserInfo');
const { Creq_deleteUser } = require('./Creq_deleteUser');

const {Creq_changeAccountPassword} = require('./Creq_changeAccountPasword');

const { Creq_getBuildings } = require("./Creq_getBuildings");
const { Creq_getFloors } = require("./Creq_getFloors");
const { Creq_getRooms } = require("./Creq_getRooms");

const { Creq_resetPassword } = require("./Creq_resetPassword");
const { Creq_forgotPassword } = require("./Creq_forgotPassword")

const { Creq_test } = require('./Creq_test');


module.exports={
    getAccountInfo: Creq_getAccountInfo,
    getAccountReport: Creq_getAccountReport,
    
    login: Creq_login,

    getArticleInfo: Creq_getArticleInfo,
    getArticleCategories: Creq_getArticleCategories,
    updateArticleInfo: Creq_updateArticleInfo,
    addNewArticle: Creq_addNewArticle,
    deleteArticle: Creq_deleteArticle,
    dislocateArticle: Creq_dislocateArticle,
    allocateArticle: Creq_allocateArticle,

    getArticleReport: Creq_getArticleReport,

    getLocationInfo: Creq_getLocationInfo,
    addNewLocation: Creq_addNewLocation,
    updateLocationInfo: Creq_updateLocationInfo,
    deleteLocation: Creq_deleteLocation,

    addNewUser: Creq_addNewUser,
    updateUserInfo: Creq_updateUserInfo,
    deleteUser: Creq_deleteUser,

    getBuildings: Creq_getBuildings,
    getFloors: Creq_getFloors,
    getRooms: Creq_getRooms,

    changeAccountPassword: Creq_changeAccountPassword,
    resetPassword: Creq_resetPassword,
    forgotPassword: Creq_forgotPassword,

    test: Creq_test,
}