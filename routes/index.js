var express = require('express');
var router = express.Router();

const petGoodsController = require('../controller/petGoods')
const userController = require('../controller/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/petgoods/getall', petGoodsController.showPetGoods)

router.get('/petgoods/getbyid/:id', petGoodsController.showPetGoodsById)

router.get('/petgoods/getbytype/:type', petGoodsController.showPetGoodsByType)

router.get('/userinfo/getbyid/:id', userController.showUserInfoById)

router.get('/login/:username/:password', userController.login)

module.exports = router;
