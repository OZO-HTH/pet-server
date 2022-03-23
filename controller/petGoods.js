const PetGoods = require("../models/petGoods");

const Result = require('../models/common/result')

const petGoodsController = {
  showPetGoods: async function (req, res, next) {
    try {
      let petGoodsData = await PetGoods.all();
      res.json({
        code: 200,
        message: "操作成功",
        data: petGoodsData,
      });
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e });
    }
  },
  showPetGoodsById: async function(req, res, next) {
    let petGoods = await PetGoods.selectByAid(req.params.id)

    if (petGoods.length === 0) {
      res.json(Result.errorCodeMessage(0, "宠物不存在"))
    } else {
      res.json(Result.successMessageData('操作成功', petGoods))
    }

    // try {
    //   res.json({
    //     code: 200,
    //     message: "操作成功",
    //     data: petGoods
    //   })
    // } catch(e) {
    //   res.json({code: 0, message: "操作失败", data: e})
    // }
   
  },
  showPetGoodsByType: async function(req, res, next) {
    let petGoods = await PetGoods.selectByType(req.params.type)

    try {
      res.json({
        code: 200,
        message: '操作成功',
        data: petGoods
      })
    } catch(e) {
      res.json({code: 0, message: '操作失败', data: e})
    }
  }
};

module.exports = petGoodsController;
