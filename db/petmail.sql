/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : petmail

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 22/03/2022 22:46:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tab_petgoods
-- ----------------------------
DROP TABLE IF EXISTS `tab_petgoods`;
CREATE TABLE `tab_petgoods` (
  `goods_id` bigint NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `goods_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `type` int DEFAULT '0' COMMENT '0: 猫 1: 狗',
  PRIMARY KEY (`goods_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of tab_petgoods
-- ----------------------------
BEGIN;
INSERT INTO `tab_petgoods` VALUES (1, 'http://r8xvotwyy.hn-bkt.clouddn.com/cat13.jpg', 330, '花花', '河北 邯郸', 1, 0);
INSERT INTO `tab_petgoods` VALUES (2, 'http://r8xvotwyy.hn-bkt.clouddn.com/cat14.jpg', 330, '花花', '河北 邯郸', 1, 0);
INSERT INTO `tab_petgoods` VALUES (3, 'http://r8xvotwyy.hn-bkt.clouddn.com/cat15.jpg', 330, '花花', '河北 邯郸', 1, 0);
INSERT INTO `tab_petgoods` VALUES (4, 'http://r8xvotwyy.hn-bkt.clouddn.com/cat16.jpg', 330, '花花', '河北 邯郸', 1, 0);
INSERT INTO `tab_petgoods` VALUES (5, 'http://r8xvotwyy.hn-bkt.clouddn.com/cat17.jpg', 330, '花花', '河北 邯郸', 1, 0);
INSERT INTO `tab_petgoods` VALUES (6, 'http://r8xvotwyy.hn-bkt.clouddn.com/cat18.jpg', 330, '花花', '河北 邯郸', 1, 0);
INSERT INTO `tab_petgoods` VALUES (7, 'http://r8xvotwyy.hn-bkt.clouddn.com/cat19.jpg', 330, '花花', '河北 邯郸', 1, 0);
INSERT INTO `tab_petgoods` VALUES (8, 'http://r8xvotwyy.hn-bkt.clouddn.com/cat20.jpg', 330, '花花', '河北 邯郸', 1, 0);
INSERT INTO `tab_petgoods` VALUES (9, 'http://r8xvotwyy.hn-bkt.clouddn.com/cat12.jpg', 330, '花花', '河北 邯郸', 1, 0);
INSERT INTO `tab_petgoods` VALUES (10, 'http://r8xvotwyy.hn-bkt.clouddn.com/cat11.jpg', 330, '花花', '河北 邯郸', 1, 0);
INSERT INTO `tab_petgoods` VALUES (11, 'http://r8xvotwyy.hn-bkt.clouddn.com/cat10.jpg', 330, '花花', '河北 邯郸', 1, 0);
COMMIT;

-- ----------------------------
-- Table structure for tab_user
-- ----------------------------
DROP TABLE IF EXISTS `tab_user`;
CREATE TABLE `tab_user` (
  `user_id` bigint NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `user_avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of tab_user
-- ----------------------------
BEGIN;
INSERT INTO `tab_user` VALUES (1, '小超', 'http://r8xvotwyy.hn-bkt.clouddn.com/cat10.jpg');
INSERT INTO `tab_user` VALUES (2, '小韩', 'http://r8xvotwyy.hn-bkt.clouddn.com/cat1.jpg');
INSERT INTO `tab_user` VALUES (3, '小程', 'http://r8xvotwyy.hn-bkt.clouddn.com/cat3.jpg');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
