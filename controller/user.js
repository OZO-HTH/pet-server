const User = require("../models/user");

const userController = {
  showUserInfoById: async function (req, res, next) {
    let userInfo = await User.selectUserInfoById(req.params.id);

    try {
      if (userInfo.length === 0) {
        res.json({
          code: 0,
          message: "用户不存在",
          data: new Error("用户不存在"),
        });
      } else {
        res.json({
          code: 200,
          message: "操作成功",
          data: userInfo,
        });
      }
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e });
    }
  },
  login: async function (req, res, next) {
    let userId = await User.selectUserByAccount(
      req.params.username,
      req.params.password
    );
    if (userId.length === 0) {
      res.json({
        code: 0,
        message: "账号或密码不正确",
        data: null,
      });
    } else {
      res.json({
        code: 200,
        message: "操作成功",
        data: userId,
      });
    }
  },
};

module.exports = userController;
