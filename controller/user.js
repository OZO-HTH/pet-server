const User = require("../models/user");

const userController = {
  showUserInfoById: async function (req, res, next) {
    let userInfo = await User.selectUserInfoById(req.params.id);

    try {
      res.json({
        code: 200,
        message: "操作成功",
        data: userInfo,
      });
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e });
    }
  },
};

module.exports = userController;
