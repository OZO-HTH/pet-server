const Base = require('./base')
const knex = require('./knex')

class PetGoods extends Base {
    constructor(props = 'tab_petgoods') {
        super(props)
    }
    selectByAid(id) {
        return knex(this.table).where('goods_id', '=', id).select()
    }
    selectByType(type) {
        return knex(this.table).where('type', '=', type).select()
    }
}

module.exports = new PetGoods()