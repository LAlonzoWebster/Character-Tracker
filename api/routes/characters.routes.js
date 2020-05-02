const Characters = require('../controllers/characters.controller');
const prefix = '/characters';
module.exports = function(router) {
    // expect the route to look like: /api/characters/
    router.get(`${prefix}/`, Characters.getAll);
    router.get(`${prefix}/:name`, Characters.getCharacter);
    router.post(`${prefix}/`, Characters.createCharacter);
    router.delete(`${prefix}/:id`,Characters.deleteCharacter);
    router.put(`${prefix}/:id`, Characters.updateCharacter);
};