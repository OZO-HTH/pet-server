# pet-server
This is the server API for the pet-mail project!

1.下载依赖： ```npm install```

2.在根目录下的config.js中修改为自己的数据库账号密码

3.导入sql文件

4.启动命令： ```npm start```

#### 接口路径:

* 查询所有宠物： /petgoods/getall
* 通过id查询宠物： /petgoods/getbyid/<goodsid>
* 通过类别查询宠物： /petgoods/getbytype/<type>
* 通过id查询用户信息(不包括密码): /userinfo/getbyid/<userid>
* 登录: /login/<username>/<password>