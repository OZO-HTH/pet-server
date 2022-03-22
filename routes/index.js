var express = require('express');
var router = express.Router();

const petGoodsController = require('../controller/petGoods')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get_petgoods', petGoodsController.showPetGoods)

router.get('/get_petgoods/:id', petGoodsController.showPetGoodsById)

router.get('/get_petgoodsByType/:type', petGoodsController.showPetGoodsByType)

module.exports = router;
