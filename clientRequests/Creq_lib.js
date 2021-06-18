const { Creq_getAccountInfo } = require('./Creq_getAccountInfo');
const { Creq_getAccountReport } = require('./Creq_getAccountReport');
const { Creq_getArticleInfo } = require('./Creq_getArticleInfo');
const { Creq_getArticleCategories} = require('./Creq_getArticleCategories');
const { Creq_updateArticleInfo } = require('./Creq_updateArticleInfo');
const { Creq_addNewArticle } = require('./Creq_addNewArticle');
const { Creq_deleteArticle } = require('./Creq_deleteArticle');
const {Creq_dislocateArticle} = require('./Creq_dislocateArticle');
const { Creq_allocateArticle } = require('./Creq_allocateArticle');
const { Creq_test } = require('./Creq_test');


module.exports={
    getAccountInfo: Creq_getAccountInfo,
    getArticleInfo: Creq_getArticleInfo,
    getAccountReport: Creq_getAccountReport,
    getArticleCategories: Creq_getArticleCategories,
    updateArticleInfo: Creq_updateArticleInfo,
    addNewArticle: Creq_addNewArticle,
    deleteArticle: Creq_deleteArticle,
    dislocateArticle: Creq_dislocateArticle,
    allocateArticle: Creq_allocateArticle,
    test: Creq_test,
}