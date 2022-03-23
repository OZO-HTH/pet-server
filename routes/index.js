var express = require('express');
var router = express.Router();

const petGoodsController = require('../controller/petGoods')
const userController = require('../controller/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/get_petgoods', petGoodsController.showPetGoods)

router.get('/get_petgoods/:id', petGoodsController.showPetGoodsById)

router.get('/get_petgoodsByType/:type', petGoodsController.showPetGoodsByType)

router.get('/get_userInfoById/:id', userController.showUserInfoById)

router.get('/get_login/:username/:password', userController.login)

module.exports = router;
