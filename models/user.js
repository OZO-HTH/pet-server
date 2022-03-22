const Base = require('./base')
const knex = require('./knex')

class User extends Base {
    constructor(props = 'tab_user') {
        super();
    }
}