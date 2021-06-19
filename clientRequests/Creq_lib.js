const { Creq_getAccountInfo } = require('./Creq_getAccountInfo');
const { Creq_getAccountReport } = require('./Creq_getAccountReport');

const { Creq_getArticleInfo } = require('./Creq_getArticleInfo');
const { Creq_getArticleCategories} = require('./Creq_getArticleCategories');
const { Creq_updateArticleInfo } = require('./Creq_updateArticleInfo');
const { Creq_addNewArticle } = require('./Creq_addNewArticle');
const { Creq_deleteArticle } = require('./Creq_deleteArticle');
const { Creq_dislocateArticle } = require('./Creq_dislocateArticle');
const { Creq_allocateArticle } = require('./Creq_allocateArticle');

const { Creq_getLocationInfo } = require('./Creq_getLocationInfo');
const { Creq_addNewLocation } = require('./Creq_addNewLocation');
const { Creq_updateLocationInfo } = require('./Creq_updateLocationInfo');
const { Creq_deleteLocation } = require('./Creq_deleteLocation');

const { Creq_addNewUser } = require('./Creq_addNewUser');
const { Creq_updateUserInfo } = require('./Creq_updateUserInfo');
const { Creq_deleteUser } = require('./Creq_deleteUser');


const { Creq_test } = require('./Creq_test');


module.exports={
    getAccountInfo: Creq_getAccountInfo,
    getAccountReport: Creq_getAccountReport,

    getArticleInfo: Creq_getArticleInfo,
    getArticleCategories: Creq_getArticleCategories,
    updateArticleInfo: Creq_updateArticleInfo,
    addNewArticle: Creq_addNewArticle,
    deleteArticle: Creq_deleteArticle,
    dislocateArticle: Creq_dislocateArticle,
    allocateArticle: Creq_allocateArticle,

    getLocationInfo: Creq_getLocationInfo,
    addNewLocation: Creq_addNewLocation,
    updateLocationInfo: Creq_updateLocationInfo,
    deleteLocation: Creq_deleteLocation,

    addNewUser: Creq_addNewUser,
    updateUserInfo: Creq_updateUserInfo,
    deleteUser: Creq_deleteUser,


    test: Creq_test,
}