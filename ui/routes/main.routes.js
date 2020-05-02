const controller = require('../controllers/main.controllers');
module.exports = function(router)
{
    router.get('/', controller.renderMain);
}