const Base = require("./base");
const knex = require("./knex");

class User extends Base {
  constructor(props = "tab_user") {
    super(props);
  }

  selectUserInfoById(id) {
    return knex.select('user_id', 'username', 'user_avatar').where('user_id', '=', id).from(this.table)
  }
  selectUserByAccount(username, password) {
    return knex.select('user_id').where('username', '=', username).andWhere('password', '=', password).from(this.table)
  }
  
}

module.exports = new User()
