/*
Navicat MySQL Data Transfer

Source Server         : 小小马儿
Source Server Version : 50720
Source Host           : 47.100.99.127:3306
Source Database       : lot_share

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-04-06 16:36:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for area
-- ----------------------------
DROP TABLE IF EXISTS `area`;
CREATE TABLE `area` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) DEFAULT NULL,
  `area_code` varchar(32) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `level` tinyint(1) NOT NULL DEFAULT '2' COMMENT '行政等级(省:0; 市:1;区:2)',
  `seq` tinyint(1) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_town` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是市区',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`),
  KEY `area_code` (`area_code`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of area
-- ----------------------------
INSERT INTO `area` VALUES ('1', null, '001', '浙江省', '0', null, '2018-03-23 21:27:16', '2018-03-23 21:27:16', '0', '0');
INSERT INTO `area` VALUES ('2', '1', '001001', '杭州市', '1', null, '2018-03-23 21:27:33', '2018-03-23 21:27:33', '0', '0');
INSERT INTO `area` VALUES ('3', '2', '001001001', '西湖区', '2', null, '2018-03-23 21:29:18', '2018-03-23 21:29:25', '1', '0');
INSERT INTO `area` VALUES ('4', '2', '001001002', '余杭区', '2', null, '2018-03-23 21:29:47', '2018-03-23 21:29:47', '0', '0');

-- ----------------------------
-- Table structure for bill
-- ----------------------------
DROP TABLE IF EXISTS `bill`;
CREATE TABLE `bill` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `transaction_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '交易类型(0:银行卡，1:支付宝，2：微信支付) ',
  `bill_amount` decimal(10,2) NOT NULL COMMENT '账单金额',
  `from_account_id` bigint(20) NOT NULL COMMENT '第三方支付接口的支付方账号id',
  `from_user_id` bigint(20) NOT NULL,
  `to_account_id` bigint(20) NOT NULL COMMENT '收款方支付宝账号id(统一支付宝处理)',
  `to_user_id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`),
  KEY `fk_to_user_id_bill` (`to_user_id`),
  KEY `fk_from_user_id_bill` (`from_user_id`),
  CONSTRAINT `fk_from_user_id_bill` FOREIGN KEY (`from_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_to_user_id_bill` FOREIGN KEY (`to_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bill
-- ----------------------------
INSERT INTO `bill` VALUES ('2', '1', '160.00', '2014211116', '3', '2014211116', '3', '已被篡改', '2018-04-01 22:11:15', '2018-04-03 14:18:41', '0');
INSERT INTO `bill` VALUES ('3', '1', '602.00', '2014211117', '4', '2014211116', '3', null, '2018-03-26 23:03:27', '2018-03-31 13:29:26', '0');
INSERT INTO `bill` VALUES ('4', '1', '44.00', '2014211117', '4', '2014211116', '3', null, '2018-03-31 10:41:58', '2018-03-31 13:29:30', '0');
INSERT INTO `bill` VALUES ('5', '1', '30.00', '2014211116', '3', '2014211116', '3', null, '2018-03-31 11:01:10', '2018-04-03 14:19:14', '0');
INSERT INTO `bill` VALUES ('6', '1', '100.00', '2014211116', '3', '2014211116', '3', null, '2018-04-03 14:15:39', '2018-04-03 14:19:11', '0');

-- ----------------------------
-- Table structure for community
-- ----------------------------
DROP TABLE IF EXISTS `community`;
CREATE TABLE `community` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `f_area_id` bigint(20) NOT NULL COMMENT '外键，所属区',
  `f_area_code` varchar(32) DEFAULT NULL,
  `longitude` decimal(9,6) NOT NULL,
  `latitude` decimal(9,6) NOT NULL,
  `address` varchar(255) DEFAULT NULL COMMENT '详细地址',
  `seq` tinyint(1) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`),
  KEY `fk_area_id` (`f_area_id`),
  KEY `fk_area_code` (`f_area_code`),
  CONSTRAINT `fk_area_code` FOREIGN KEY (`f_area_code`) REFERENCES `area` (`area_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_area_id` FOREIGN KEY (`f_area_id`) REFERENCES `area` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of community
-- ----------------------------
INSERT INTO `community` VALUES ('4', '仓溢绿苑', '3', '001001001', '119.998059', '30.289628', '余杭区文一西路', '0', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523330476&di=750f7996fcf6a61560b2374e497cd54f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.youzy.cn%2Fcontent%2Fmedia%2Fthumbs%2Fp00129871_800.jpeg', null, '2018-03-25 19:25:19', '2018-04-06 16:21:38', '0');
INSERT INTO `community` VALUES ('5', '西溪北苑', '3', '001001001', '120.042085', '30.293071', '余杭区文一西路', '1', null, null, '2018-03-25 19:25:39', '2018-04-06 16:21:38', '0');
INSERT INTO `community` VALUES ('6', '西溪风情', '3', '001001002', '120.043075', '30.284602', '余杭区文二西路', '2', null, null, '2018-03-25 18:23:47', '2018-04-06 16:21:40', '0');

-- ----------------------------
-- Table structure for lk_collection_user_community
-- ----------------------------
DROP TABLE IF EXISTS `lk_collection_user_community`;
CREATE TABLE `lk_collection_user_community` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `f_user_id` bigint(20) NOT NULL,
  `f_community_id` bigint(20) NOT NULL,
  `remark_name` varchar(255) DEFAULT NULL COMMENT '收藏名',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否收藏',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `f_community_id` (`f_community_id`) USING BTREE,
  KEY `f_user_id` (`f_user_id`),
  CONSTRAINT `lk_collection_user_community_ibfk_1` FOREIGN KEY (`f_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lk_collection_user_community_ibfk_2` FOREIGN KEY (`f_community_id`) REFERENCES `community` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_collection_user_community
-- ----------------------------

-- ----------------------------
-- Table structure for lk_collection_user_space
-- ----------------------------
DROP TABLE IF EXISTS `lk_collection_user_space`;
CREATE TABLE `lk_collection_user_space` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `f_user_id` bigint(20) NOT NULL,
  `f_space_id` bigint(20) NOT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '收藏 1表示收藏  0表示取消收藏',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `f_space_id` (`f_space_id`) USING BTREE,
  KEY `f_user_id` (`f_user_id`),
  CONSTRAINT `lk_collection_user_space_ibfk_1` FOREIGN KEY (`f_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lk_collection_user_space_ibfk_2` FOREIGN KEY (`f_space_id`) REFERENCES `space` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_collection_user_space
-- ----------------------------
INSERT INTO `lk_collection_user_space` VALUES ('26', '3', '1', '2018-04-04 19:00:43', '2018-04-05 19:36:31', '0', '0');

-- ----------------------------
-- Table structure for lk_community_policy
-- ----------------------------
DROP TABLE IF EXISTS `lk_community_policy`;
CREATE TABLE `lk_community_policy` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `f_community_id` bigint(20) NOT NULL,
  `owner_benifit_percent` decimal(10,2) NOT NULL DEFAULT '80.00',
  `community_benifit_percent` decimal(10,2) NOT NULL DEFAULT '80.00',
  `timeout_unit_price` decimal(10,2) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL DEFAULT '10.00',
  `morning_begin_time` time NOT NULL COMMENT '上午预计租用开放时间',
  `morning_end_time` time NOT NULL COMMENT '上午预计租用开放时间',
  `afternoon_begin_time` time NOT NULL COMMENT '上午预计租用开放时间',
  `afternoon_end_time` time NOT NULL COMMENT '下午预计租用结束时间',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_community_id_lk_policy` (`f_community_id`),
  CONSTRAINT `fk_community_id_lk_policy` FOREIGN KEY (`f_community_id`) REFERENCES `community` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_community_policy
-- ----------------------------
INSERT INTO `lk_community_policy` VALUES ('2', '4', '80.22', '100.22', '10.00', '10.20', '08:13:21', '11:35:28', '12:35:35', '18:13:43', '2018-03-29 21:34:10', '2018-03-31 11:46:33');
INSERT INTO `lk_community_policy` VALUES ('3', '5', '90.12', '80.00', '10.00', '15.20', '08:00:00', '11:00:00', '12:00:00', '17:00:00', '2018-03-30 16:38:23', '2018-03-31 11:46:38');
INSERT INTO `lk_community_policy` VALUES ('4', '6', '80.00', '80.00', '15.00', '10.00', '08:30:00', '11:00:00', '13:00:00', '18:00:00', '2018-04-06 16:33:29', '2018-04-06 16:33:29');

-- ----------------------------
-- Table structure for lk_space_day_renting_status
-- ----------------------------
DROP TABLE IF EXISTS `lk_space_day_renting_status`;
CREATE TABLE `lk_space_day_renting_status` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_begin` date NOT NULL,
  `date_end` date NOT NULL,
  `period_type` tinyint(1) NOT NULL DEFAULT '2' COMMENT '0表示租上午，1表示租下午, 2表示全天, 3长期租用',
  `f_rule_id` bigint(20) DEFAULT NULL COMMENT '租用规则id',
  `f_renter_id` bigint(20) NOT NULL COMMENT '0表示上午， 1表示下午',
  `f_vehicle_id` bigint(20) DEFAULT NULL,
  `f_space_id` bigint(20) NOT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除(0表示已取消,1表示已删除)',
  PRIMARY KEY (`id`),
  KEY `fk_space_id_status` (`f_space_id`),
  KEY `fk_renter_id_rule` (`f_renter_id`),
  KEY `f_rule_id` (`f_rule_id`),
  KEY `f_vehicle_id` (`f_vehicle_id`),
  CONSTRAINT `fk_renter_id_rule` FOREIGN KEY (`f_renter_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_space_id_status` FOREIGN KEY (`f_space_id`) REFERENCES `space` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lk_space_day_renting_status_ibfk_1` FOREIGN KEY (`f_rule_id`) REFERENCES `lk_space_week_renting_rule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lk_space_day_renting_status_ibfk_2` FOREIGN KEY (`f_vehicle_id`) REFERENCES `vehicle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_space_day_renting_status
-- ----------------------------
INSERT INTO `lk_space_day_renting_status` VALUES ('3', '2018-04-01', '2018-04-05', '0', '10', '3', '1', '1', '2018-03-30 20:40:24', '2018-04-05 02:02:23', '0');
INSERT INTO `lk_space_day_renting_status` VALUES ('4', '2018-03-01', '2018-03-02', '3', '3', '3', '1', '1', '2018-04-03 16:49:33', '2018-04-04 20:27:41', '0');
INSERT INTO `lk_space_day_renting_status` VALUES ('9', '2018-04-04', '2018-04-04', '0', null, '3', '1', '1', '2018-04-05 02:28:13', '2018-04-05 02:28:13', '0');
INSERT INTO `lk_space_day_renting_status` VALUES ('10', '2018-04-09', '2018-04-15', '3', null, '3', '1', '1', '2018-04-05 05:00:42', '2018-04-05 05:00:42', '0');
INSERT INTO `lk_space_day_renting_status` VALUES ('11', '2018-04-09', '2018-04-15', '3', '11', '3', '1', '1', '2018-04-05 05:08:27', '2018-04-05 05:08:27', '0');

-- ----------------------------
-- Table structure for lk_space_week_renting_rule
-- ----------------------------
DROP TABLE IF EXISTS `lk_space_week_renting_rule`;
CREATE TABLE `lk_space_week_renting_rule` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `f_space_id` bigint(20) NOT NULL,
  `is_mon_ok` tinyint(1) NOT NULL DEFAULT '1',
  `is_tue_ok` tinyint(1) NOT NULL DEFAULT '1',
  `is_wed_ok` tinyint(1) NOT NULL DEFAULT '1',
  `is_thur_ok` tinyint(1) NOT NULL DEFAULT '1',
  `is_fri_ok` tinyint(1) NOT NULL DEFAULT '1',
  `is_sat_ok` tinyint(1) NOT NULL DEFAULT '1',
  `is_sun_ok` tinyint(1) NOT NULL DEFAULT '1',
  `is_morning_ok` tinyint(1) NOT NULL DEFAULT '1',
  `is_afternoon_ok` tinyint(1) NOT NULL DEFAULT '1',
  `is_long_renting` tinyint(1) NOT NULL DEFAULT '0',
  `is_festival_ok` tinyint(1) NOT NULL DEFAULT '0' COMMENT '默认为0，1表示允许该周的节假日出租车位',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '默认开放(0表示未通过校验，1表示开放，2表示用户关闭分享，3表示禁用)',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  PRIMARY KEY (`id`),
  KEY `fk_space_id_rule` (`f_space_id`),
  CONSTRAINT `fk_space_id_rule` FOREIGN KEY (`f_space_id`) REFERENCES `space` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_space_week_renting_rule
-- ----------------------------
INSERT INTO `lk_space_week_renting_rule` VALUES ('2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2018-03-30 13:57:26', '2018-04-03 20:33:14', '1', '1');
INSERT INTO `lk_space_week_renting_rule` VALUES ('3', '3', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '2018-03-30 21:19:56', '2018-04-06 14:59:28', '1', '0');
INSERT INTO `lk_space_week_renting_rule` VALUES ('4', '24', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '2018-03-31 16:22:09', '2018-04-03 13:35:09', '1', '0');
INSERT INTO `lk_space_week_renting_rule` VALUES ('5', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2018-04-03 21:39:55', '2018-04-03 21:40:12', '1', '1');
INSERT INTO `lk_space_week_renting_rule` VALUES ('6', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2018-04-03 21:40:12', '2018-04-04 15:16:23', '1', '1');
INSERT INTO `lk_space_week_renting_rule` VALUES ('7', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '2018-04-04 15:16:23', '2018-04-04 15:29:04', '0', '1');
INSERT INTO `lk_space_week_renting_rule` VALUES ('8', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2018-04-04 15:29:04', '2018-04-04 15:29:30', '1', '1');
INSERT INTO `lk_space_week_renting_rule` VALUES ('10', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '2018-04-04 15:29:30', '2018-04-04 16:58:57', '0', '1');
INSERT INTO `lk_space_week_renting_rule` VALUES ('11', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '0', '1', '2018-04-04 16:58:57', '2018-04-06 15:00:45', '1', '0');

-- ----------------------------
-- Table structure for lk_sys_role_resource
-- ----------------------------
DROP TABLE IF EXISTS `lk_sys_role_resource`;
CREATE TABLE `lk_sys_role_resource` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `f_role_id` bigint(20) NOT NULL,
  `f_resource_id` bigint(20) NOT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `f_create_by` bigint(20) DEFAULT NULL,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `f_modified_by` bigint(20) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`),
  KEY `fk_role_id_rr` (`f_role_id`),
  KEY `fk_resource_id_rr` (`f_resource_id`),
  KEY `fk_create_by_rr` (`f_create_by`),
  KEY `f_modified_by_rr` (`f_modified_by`),
  CONSTRAINT `f_modified_by_rr` FOREIGN KEY (`f_modified_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_create_by_rr` FOREIGN KEY (`f_create_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_resource_id_rr` FOREIGN KEY (`f_resource_id`) REFERENCES `resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_role_id_rr` FOREIGN KEY (`f_role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_sys_role_resource
-- ----------------------------
INSERT INTO `lk_sys_role_resource` VALUES ('1', '1', '1', '2018-03-23 21:50:51', null, '2018-03-23 21:50:51', null, '0');
INSERT INTO `lk_sys_role_resource` VALUES ('2', '3', '2', '2018-03-23 21:51:12', null, '2018-03-23 21:51:12', null, '0');
INSERT INTO `lk_sys_role_resource` VALUES ('3', '4', '3', '2018-03-23 21:51:20', null, '2018-03-23 21:51:20', null, '0');
INSERT INTO `lk_sys_role_resource` VALUES ('4', '4', '2', '2018-03-23 21:51:29', null, '2018-03-23 21:51:29', null, '0');

-- ----------------------------
-- Table structure for lk_sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `lk_sys_user_role`;
CREATE TABLE `lk_sys_user_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `f_user_id` bigint(20) NOT NULL,
  `f_role_id` bigint(20) NOT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `f_create_by` bigint(20) DEFAULT NULL,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `f_modified_by` bigint(20) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`),
  KEY `fk_user_id_ur` (`f_user_id`),
  KEY `fk_role_id_ur` (`f_role_id`),
  KEY `fk_create_by_ur` (`f_create_by`),
  KEY `fk_modified_by_ur` (`f_modified_by`),
  CONSTRAINT `fk_create_by_ur` FOREIGN KEY (`f_create_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_modified_by_ur` FOREIGN KEY (`f_modified_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_role_id_ur` FOREIGN KEY (`f_role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_id_ur` FOREIGN KEY (`f_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_sys_user_role
-- ----------------------------
INSERT INTO `lk_sys_user_role` VALUES ('1', '3', '1', '2018-03-23 21:51:55', null, '2018-03-23 21:51:55', null, '0');
INSERT INTO `lk_sys_user_role` VALUES ('2', '3', '2', '2018-03-23 21:52:03', null, '2018-03-23 21:52:03', null, '0');
INSERT INTO `lk_sys_user_role` VALUES ('3', '3', '3', '2018-03-23 21:52:10', null, '2018-03-23 21:52:10', null, '0');
INSERT INTO `lk_sys_user_role` VALUES ('4', '3', '4', '2018-03-23 21:52:19', null, '2018-03-23 21:52:19', null, '0');
INSERT INTO `lk_sys_user_role` VALUES ('5', '4', '3', '2018-03-23 22:05:09', null, '2018-03-23 22:05:09', null, '0');

-- ----------------------------
-- Table structure for lk_user_community_zone_space
-- ----------------------------
DROP TABLE IF EXISTS `lk_user_community_zone_space`;
CREATE TABLE `lk_user_community_zone_space` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `f_owner_id` bigint(20) DEFAULT NULL COMMENT '尚未确定户主信息前',
  `f_community_id` bigint(20) NOT NULL,
  `f_zone_id` bigint(20) NOT NULL,
  `f_space_id` bigint(20) NOT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否通过校验',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `f_owner_id` (`f_owner_id`),
  KEY `f_community_id` (`f_community_id`),
  KEY `f_zone_id` (`f_zone_id`),
  KEY `f_space_id` (`f_space_id`),
  CONSTRAINT `lk_user_community_zone_space_ibfk_1` FOREIGN KEY (`f_owner_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lk_user_community_zone_space_ibfk_2` FOREIGN KEY (`f_community_id`) REFERENCES `community` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lk_user_community_zone_space_ibfk_3` FOREIGN KEY (`f_zone_id`) REFERENCES `zone` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lk_user_community_zone_space_ibfk_4` FOREIGN KEY (`f_space_id`) REFERENCES `space` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_user_community_zone_space
-- ----------------------------
INSERT INTO `lk_user_community_zone_space` VALUES ('1', '3', '4', '1', '1', '2018-04-03 20:44:22', '2018-04-05 19:33:56', '1', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('2', '3', '4', '1', '3', '2018-04-03 20:44:38', '2018-04-06 14:57:41', '1', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('3', '4', '4', '1', '24', '2018-04-03 20:44:57', '2018-04-03 20:45:02', '1', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('4', '3', '4', '1', '32', '2018-04-06 15:49:44', '2018-04-06 16:17:48', '1', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('5', null, '4', '3', '33', '2018-04-06 16:29:22', '2018-04-06 16:29:22', '0', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('6', null, '4', '3', '34', '2018-04-06 16:29:49', '2018-04-06 16:29:49', '0', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('7', null, '4', '3', '35', '2018-04-06 16:30:02', '2018-04-06 16:30:02', '0', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('8', null, '4', '3', '36', '2018-04-06 16:30:14', '2018-04-06 16:30:14', '0', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('9', null, '5', '5', '37', '2018-04-06 16:31:05', '2018-04-06 16:31:05', '0', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('10', null, '5', '5', '38', '2018-04-06 16:31:20', '2018-04-06 16:31:20', '0', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('11', null, '5', '5', '39', '2018-04-06 16:31:38', '2018-04-06 16:31:38', '0', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('12', null, '6', '7', '40', '2018-04-06 16:31:56', '2018-04-06 16:31:56', '0', '0');
INSERT INTO `lk_user_community_zone_space` VALUES ('13', '3', '6', '7', '41', '2018-04-06 16:32:09', '2018-04-06 16:35:19', '1', '0');

-- ----------------------------
-- Table structure for lk_user_vehicle
-- ----------------------------
DROP TABLE IF EXISTS `lk_user_vehicle`;
CREATE TABLE `lk_user_vehicle` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `f_user_id` bigint(20) NOT NULL,
  `f_vehicle_id` bigint(20) NOT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`),
  KEY `fk_user_id_uv` (`f_user_id`),
  KEY `fk_vehicle_id_uv` (`f_vehicle_id`),
  CONSTRAINT `fk_user_id_uv` FOREIGN KEY (`f_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_vehicle_id_uv` FOREIGN KEY (`f_vehicle_id`) REFERENCES `vehicle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_user_vehicle
-- ----------------------------
INSERT INTO `lk_user_vehicle` VALUES ('1', '3', '1', '2018-03-23 21:43:18', '2018-03-23 21:43:18', '0');

-- ----------------------------
-- Table structure for lk_user_wallet_month
-- ----------------------------
DROP TABLE IF EXISTS `lk_user_wallet_month`;
CREATE TABLE `lk_user_wallet_month` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `f_user_id` bigint(20) NOT NULL,
  `wallet_year` int(6) NOT NULL COMMENT '形如2018-01',
  `wallet_month` tinyint(2) NOT NULL,
  `month_income` decimal(10,2) NOT NULL DEFAULT '0.00',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_user_id_wallet_month` (`f_user_id`),
  CONSTRAINT `fk_user_id_wallet_month` FOREIGN KEY (`f_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_user_wallet_month
-- ----------------------------
INSERT INTO `lk_user_wallet_month` VALUES ('1', '3', '2018', '3', '64.00', '2018-03-23 22:03:28', '2018-03-31 01:54:15');

-- ----------------------------
-- Table structure for lk_user_wallet_total
-- ----------------------------
DROP TABLE IF EXISTS `lk_user_wallet_total`;
CREATE TABLE `lk_user_wallet_total` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `f_user_id` bigint(20) NOT NULL,
  `income_total` decimal(10,2) NOT NULL DEFAULT '0.00',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_user_id_wallet_total` (`f_user_id`),
  CONSTRAINT `fk_user_id_wallet_total` FOREIGN KEY (`f_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_user_wallet_total
-- ----------------------------
INSERT INTO `lk_user_wallet_total` VALUES ('1', '3', '0.00', '2018-03-23 22:02:17', '2018-03-23 22:02:17');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `order_type` bigint(20) NOT NULL DEFAULT '0' COMMENT '租用类型(0:短租;1:长租)',
  `f_renting_status_id` bigint(20) NOT NULL COMMENT '如果为短租, 所属租用情况id',
  `order_description` varchar(255) DEFAULT NULL,
  `unit_price` decimal(10,2) DEFAULT NULL COMMENT '单价',
  `timeout_unit_price` decimal(10,2) DEFAULT NULL,
  `duration` decimal(10,2) DEFAULT NULL COMMENT '时长',
  `timeout_duration` decimal(10,2) DEFAULT NULL,
  `timeout_payment` decimal(10,2) DEFAULT NULL,
  `expected_payment` decimal(10,2) DEFAULT NULL,
  `reduction` decimal(10,2) DEFAULT '0.00' COMMENT '优惠折扣',
  `reduction_description` varchar(255) DEFAULT '0' COMMENT '优惠折扣的原因',
  `pre_payment` decimal(10,2) DEFAULT NULL COMMENT '预支付金额',
  `f_pre_payment_bill_id` bigint(20) DEFAULT NULL COMMENT '预支付账单号',
  `actual_payment` decimal(10,2) DEFAULT NULL COMMENT '实际支付',
  `f_actual_payment_bill_id` bigint(20) DEFAULT NULL COMMENT '实际支付账单号',
  `order_score` decimal(2,1) DEFAULT NULL COMMENT '车位打分',
  `order_level` tinyint(1) DEFAULT NULL COMMENT '车位等级',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '订单状态(0:预订->1:支付完成进行中->2:已完成;3:已取消)',
  PRIMARY KEY (`id`),
  KEY `fk_pre_payment_bill_id` (`f_pre_payment_bill_id`),
  KEY `fk_actual_payment_bill_id` (`f_actual_payment_bill_id`),
  KEY `fk_renting_status_id` (`f_renting_status_id`),
  CONSTRAINT `fk_actual_payment_bill_id` FOREIGN KEY (`f_actual_payment_bill_id`) REFERENCES `bill` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_pre_payment_bill_id` FOREIGN KEY (`f_pre_payment_bill_id`) REFERENCES `bill` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_renting_status_id` FOREIGN KEY (`f_renting_status_id`) REFERENCES `lk_space_day_renting_status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('2', '1', '3', '哇哈哈哈哈哈', null, null, null, null, null, null, '0.00', '0', null, null, '100.00', '2', null, null, '2018-03-26 23:56:32', '2018-04-04 16:56:31', '0');
INSERT INTO `order` VALUES ('7', '1', '4', null, null, null, null, null, null, null, '0.00', '0', null, null, '200.00', '3', null, null, '2018-04-01 16:45:55', '2018-04-04 16:56:36', '0');
INSERT INTO `order` VALUES ('10', '0', '9', null, null, null, null, null, null, null, '0.00', '0', null, null, null, null, null, null, '2018-04-05 02:28:13', '2018-04-05 02:28:13', '0');
INSERT INTO `order` VALUES ('11', '0', '10', null, null, null, null, null, null, null, '0.00', '0', null, null, null, null, null, null, '2018-04-05 05:00:42', '2018-04-05 05:00:42', '0');
INSERT INTO `order` VALUES ('12', '0', '11', null, null, null, null, null, null, null, '0.00', '0', null, null, null, null, null, null, '2018-04-05 05:08:27', '2018-04-05 05:08:27', '0');

-- ----------------------------
-- Table structure for pay_ali
-- ----------------------------
DROP TABLE IF EXISTS `pay_ali`;
CREATE TABLE `pay_ali` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_alipay_id` bigint(20) NOT NULL,
  `f_user_id` bigint(20) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `auth_password` char(32) NOT NULL,
  `password_salt` char(32) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '支付宝绑定状态(0:未认证;1:验证通过;2:取消绑定）',
  PRIMARY KEY (`id`),
  KEY `fk_user_id` (`f_user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`f_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pay_ali
-- ----------------------------
INSERT INTO `pay_ali` VALUES ('1', '2014211116', '3', '699505', '123456', null, '2018-03-23 22:08:42', '2018-03-26 20:35:36', '0');
INSERT INTO `pay_ali` VALUES ('4', '2014211117', '4', '699507', '123456', null, '2018-03-31 11:55:55', '2018-03-31 11:55:55', '0');

-- ----------------------------
-- Table structure for pay_bank
-- ----------------------------
DROP TABLE IF EXISTS `pay_bank`;
CREATE TABLE `pay_bank` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_bank_id` bigint(20) NOT NULL,
  `f_user_id` bigint(20) NOT NULL,
  `bank_code` bigint(20) NOT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `id_card` char(18) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `auth_password` char(32) NOT NULL,
  `password_salt` char(32) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '银行卡绑定状态(0:未通过;1:认证通过;2:取消绑定)',
  PRIMARY KEY (`id`),
  KEY `fk_user_id_pay_bank` (`f_user_id`),
  CONSTRAINT `fk_user_id_pay_bank` FOREIGN KEY (`f_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pay_bank
-- ----------------------------
INSERT INTO `pay_bank` VALUES ('1', '2014211116', '3', '1001', '建设银行', '330226199604121594', '17816869505', '123456', null, '2018-03-31 11:00:49', '2018-03-31 11:00:49', '0');

-- ----------------------------
-- Table structure for pay_wechat
-- ----------------------------
DROP TABLE IF EXISTS `pay_wechat`;
CREATE TABLE `pay_wechat` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_wechat_id` bigint(20) NOT NULL,
  `f_user_id` bigint(20) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `auth_password` char(32) NOT NULL,
  `password_salt` char(32) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '微信支付绑定状态(0:未验证;1:认证通过;2:取消绑定)',
  PRIMARY KEY (`id`),
  KEY `fk_user_id_pay_wechat` (`f_user_id`),
  CONSTRAINT `fk_user_id_pay_wechat` FOREIGN KEY (`f_user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pay_wechat
-- ----------------------------

-- ----------------------------
-- Table structure for resource
-- ----------------------------
DROP TABLE IF EXISTS `resource`;
CREATE TABLE `resource` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `resource_name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of resource
-- ----------------------------
INSERT INTO `resource` VALUES ('1', 'rbac', '权限分配', '2018-03-23 21:49:04', '2018-03-23 21:49:04', '0');
INSERT INTO `resource` VALUES ('2', '查看车位', null, '2018-03-23 21:49:17', '2018-03-23 21:49:17', '0');
INSERT INTO `resource` VALUES ('3', '发布车位', '业主权限', '2018-03-23 21:49:27', '2018-03-23 21:49:50', '0');
INSERT INTO `resource` VALUES ('4', '哈哈哈', null, '2018-03-26 22:26:57', '2018-03-26 22:27:26', '0');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `f_create_by` bigint(20) DEFAULT NULL,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `f_modified_by` bigint(20) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`),
  KEY `fk_create_by_sys_role` (`f_create_by`),
  KEY `fk_modified_by` (`f_modified_by`),
  CONSTRAINT `fk_create_by_sys_role` FOREIGN KEY (`f_create_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_modified_by` FOREIGN KEY (`f_modified_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '系统管理员', '史上最强', '2018-03-23 21:46:49', '3', '2018-03-23 21:46:49', '3', '0');
INSERT INTO `role` VALUES ('2', '物业管理员', '物业方管理', '2018-03-23 21:47:29', '3', '2018-03-23 21:47:29', null, '0');
INSERT INTO `role` VALUES ('3', '租客', '租用车位', '2018-03-23 21:47:45', null, '2018-03-23 21:47:45', null, '0');
INSERT INTO `role` VALUES ('4', '业主', '有车位就是(＾－＾)V', '2018-03-23 21:47:52', null, '2018-03-23 21:48:21', null, '0');
INSERT INTO `role` VALUES ('5', '哈哈哈哈', null, '2018-03-26 22:28:14', null, '2018-03-26 22:28:38', null, '0');

-- ----------------------------
-- Table structure for space
-- ----------------------------
DROP TABLE IF EXISTS `space`;
CREATE TABLE `space` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL COMMENT '车位号',
  `name` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL COMMENT '车位照片',
  `space_area` decimal(10,2) DEFAULT NULL COMMENT '车位面积（单位：平方米）',
  `level` tinyint(4) DEFAULT NULL COMMENT '等级',
  `score` decimal(10,2) DEFAULT NULL COMMENT '得分',
  `description` varchar(255) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of space
-- ----------------------------
INSERT INTO `space` VALUES ('1', '12', '豪华车位1', null, '10.20', '1', '4.80', 'NICE，推荐', '2018-03-23 21:45:35', '2018-03-30 14:04:18', '0');
INSERT INTO `space` VALUES ('3', '16', '新的车位', null, '10.00', '1', '4.90', 'hello', '2018-03-25 20:40:08', '2018-04-05 16:17:29', '0');
INSERT INTO `space` VALUES ('24', '12', '测试', null, '10.22', null, '3.50', '仅供测试', '2018-03-29 22:40:18', '2018-04-05 19:59:17', '0');
INSERT INTO `space` VALUES ('25', '12', '优异', null, '199.20', '5', '5.00', '新增测试', '2018-03-29 22:42:01', '2018-04-03 14:04:43', '0');
INSERT INTO `space` VALUES ('27', '17', '章赛凤', null, null, null, null, '西溪花苑', '2018-03-30 16:44:59', '2018-03-30 16:44:59', '0');
INSERT INTO `space` VALUES ('28', '10086', null, null, '10.22', null, null, '中国移动', '2018-03-30 19:51:38', '2018-03-30 19:51:38', '0');
INSERT INTO `space` VALUES ('29', '556', '同', null, null, null, null, '颐和花园', '2018-03-31 21:18:29', '2018-03-31 21:18:29', '0');
INSERT INTO `space` VALUES ('30', '545', 'j名', null, null, null, null, '西溪北苑', '2018-04-05 19:48:17', '2018-04-05 19:48:17', '0');
INSERT INTO `space` VALUES ('31', '54664', '你好', null, null, null, null, '西溪北苑', '2018-04-05 19:48:44', '2018-04-05 19:48:44', '0');
INSERT INTO `space` VALUES ('32', null, '传说中的车位', null, null, null, null, null, '2018-04-06 15:49:02', '2018-04-06 15:49:02', '0');
INSERT INTO `space` VALUES ('33', null, '绿苑A-1车位', null, null, null, null, null, '2018-04-06 16:26:29', '2018-04-06 16:26:29', '0');
INSERT INTO `space` VALUES ('34', null, '绿苑A-2车位', null, null, null, null, null, '2018-04-06 16:26:39', '2018-04-06 16:26:39', '0');
INSERT INTO `space` VALUES ('35', null, '绿苑A-3车位', null, null, null, null, null, '2018-04-06 16:26:51', '2018-04-06 16:26:51', '0');
INSERT INTO `space` VALUES ('36', null, '绿苑A-4车位', null, null, null, null, null, '2018-04-06 16:27:05', '2018-04-06 16:27:05', '0');
INSERT INTO `space` VALUES ('37', null, '北苑车位A-1-1', null, null, null, null, null, '2018-04-06 16:27:31', '2018-04-06 16:27:31', '0');
INSERT INTO `space` VALUES ('38', null, '北苑车位A-1-2', null, null, null, null, null, '2018-04-06 16:27:31', '2018-04-06 16:27:42', '0');
INSERT INTO `space` VALUES ('39', null, '北苑车位A-1-3', null, null, null, null, null, '2018-04-06 16:27:56', '2018-04-06 16:27:56', '0');
INSERT INTO `space` VALUES ('40', null, '西溪风情车位001', null, null, null, null, null, '2018-04-06 16:28:17', '2018-04-06 16:28:17', '0');
INSERT INTO `space` VALUES ('41', null, '西溪风情车位002', null, null, null, null, null, '2018-04-06 16:28:38', '2018-04-06 16:28:38', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `real_name` varchar(255) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `id_card` char(18) NOT NULL,
  `password` char(32) NOT NULL,
  `password_salt` char(32) DEFAULT NULL,
  `nick_name` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT '1',
  `icon` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_owner` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是业主',
  `is_renter` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是租客',
  `is_admin` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是管理员',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('3', '骆金参', '17816869505', '330226199604121594', '123456', null, '小骆子', '1', null, '1095847440@qq.com', '帅锅一枚，拒不背锅', '2018-03-23 20:30:20', '2018-03-23 21:41:31', '0', '0', '0', '0');
INSERT INTO `user` VALUES ('4', '叶磊', '17816869555', '330226199504121594', '123456', null, '小磊子', '1', null, null, null, '2018-03-23 22:04:36', '2018-03-23 22:04:36', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for vehicle
-- ----------------------------
DROP TABLE IF EXISTS `vehicle`;
CREATE TABLE `vehicle` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `vehicle_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '车辆类型(0:小客车;1:货车...)',
  `plate_num` varchar(10) NOT NULL,
  `color` tinyint(4) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vehicle
-- ----------------------------
INSERT INTO `vehicle` VALUES ('1', '1', '浙A·88888', '1', '蓝色奔驰旁的三轮车', '2018-03-23 21:43:03', '2018-03-23 21:43:03', '0');

-- ----------------------------
-- Table structure for zone
-- ----------------------------
DROP TABLE IF EXISTS `zone`;
CREATE TABLE `zone` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '软删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zone
-- ----------------------------
INSERT INTO `zone` VALUES ('1', '菜鸟驿站地下车库', '与快递同行', '2018-03-23 21:44:31', '2018-03-23 21:44:31', '0');
INSERT INTO `zone` VALUES ('3', '绿苑A区', '仓溢绿苑A区', '2018-04-06 16:23:19', '2018-04-06 16:23:41', '0');
INSERT INTO `zone` VALUES ('4', '绿苑B区', '仓溢绿苑B区', '2018-04-06 16:23:37', '2018-04-06 16:23:37', '0');
INSERT INTO `zone` VALUES ('5', '北苑A-1区', '西溪北苑A-1区', '2018-04-06 16:24:13', '2018-04-06 16:24:13', '0');
INSERT INTO `zone` VALUES ('6', '北苑A-2区', '西溪北苑A-2区', '2018-04-06 16:24:39', '2018-04-06 16:24:39', '0');
INSERT INTO `zone` VALUES ('7', '风情01区', '西溪风情地下车库01区', '2018-04-06 16:25:11', '2018-04-06 16:25:11', '0');
INSERT INTO `zone` VALUES ('8', '风情02区', '西溪风情低下车库02区', '2018-04-06 16:25:28', '2018-04-06 16:25:28', '0');
