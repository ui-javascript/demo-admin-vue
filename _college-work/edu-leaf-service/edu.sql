/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : edu

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2017-05-25 19:36:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `aclass`
-- ----------------------------
DROP TABLE IF EXISTS `aclass`;
CREATE TABLE `aclass` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '班级id',
  `name` varchar(50) NOT NULL COMMENT '班级名称',
  `description` varchar(255) DEFAULT NULL COMMENT '班级备注',
  `major_id` int(11) NOT NULL COMMENT '所属专业id',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态，1表示开放，0表示禁用',
  PRIMARY KEY (`id`),
  KEY `fk_class_major_id` (`major_id`),
  CONSTRAINT `fk_class_major_id` FOREIGN KEY (`major_id`) REFERENCES `major` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of aclass
-- ----------------------------
INSERT INTO `aclass` VALUES ('1', '计算机141', null, '1', '1');
INSERT INTO `aclass` VALUES ('2', '计142', null, '2', '1');
INSERT INTO `aclass` VALUES ('3', '计143', null, '1', '1');
INSERT INTO `aclass` VALUES ('4', '计144', null, '1', '1');
INSERT INTO `aclass` VALUES ('5', '软工141', null, '3', '1');
INSERT INTO `aclass` VALUES ('6', '软工142', null, '3', '1');
INSERT INTO `aclass` VALUES ('7', '物联网141', null, '4', '1');

-- ----------------------------
-- Table structure for `dept`
-- ----------------------------
DROP TABLE IF EXISTS `dept`;
CREATE TABLE `dept` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '系部id',
  `name` varchar(50) NOT NULL COMMENT '系部名称',
  `intro` varchar(255) DEFAULT NULL COMMENT '系部说明',
  `description` varchar(255) DEFAULT '' COMMENT '系部备注',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态，1表示开启，0表示禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dept
-- ----------------------------
INSERT INTO `dept` VALUES ('1', '计算机系', '老牌专业20多年', '', '1');
INSERT INTO `dept` VALUES ('2', '软件工程系', null, '', '1');
INSERT INTO `dept` VALUES ('3', '物联网系', null, '', '1');
INSERT INTO `dept` VALUES ('4', '系', '老牌', '', '1');

-- ----------------------------
-- Table structure for `major`
-- ----------------------------
DROP TABLE IF EXISTS `major`;
CREATE TABLE `major` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '专业id',
  `name` varchar(50) NOT NULL COMMENT '专业名称',
  `intro` varchar(255) DEFAULT NULL COMMENT '专业说明',
  `description` varchar(255) DEFAULT NULL COMMENT '专业备注',
  `dept_id` int(11) NOT NULL COMMENT '所属系部id',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态，1表示开放，0表示禁止',
  PRIMARY KEY (`id`),
  KEY `fk_major_dept_id` (`dept_id`),
  CONSTRAINT `fk_major_dept_id` FOREIGN KEY (`dept_id`) REFERENCES `dept` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of major
-- ----------------------------
INSERT INTO `major` VALUES ('1', '计算机科学与技术', null, null, '1', '1');
INSERT INTO `major` VALUES ('2', '计算机科学与技术（金融方向）', null, null, '1', '1');
INSERT INTO `major` VALUES ('3', '软件工程', null, null, '2', '1');
INSERT INTO `major` VALUES ('4', '物联网', null, null, '3', '1');
INSERT INTO `major` VALUES ('7', '测试', '仅供测试', null, '1', '1');

-- ----------------------------
-- Table structure for `material`
-- ----------------------------
DROP TABLE IF EXISTS `material`;
CREATE TABLE `material` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '材料ID',
  `name` varchar(50) NOT NULL COMMENT '材料名',
  `url` varchar(255) NOT NULL COMMENT '材料路径',
  `upload_dt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `uploader_id` int(11) NOT NULL,
  `size` varchar(50) DEFAULT NULL,
  `dl_times` int(5) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `material_type_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '状态，1表示开放，0表示禁止',
  PRIMARY KEY (`id`),
  KEY `material_type_id` (`material_type_id`),
  KEY `material_user_id` (`uploader_id`),
  CONSTRAINT `material_type_id` FOREIGN KEY (`material_type_id`) REFERENCES `material_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `material_user_id` FOREIGN KEY (`uploader_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of material
-- ----------------------------
INSERT INTO `material` VALUES ('1', '近代史纲要复习提纲', '/file/asdasdas.pdf', '2017-05-24 21:45:50', '2', null, null, null, '1', '1');

-- ----------------------------
-- Table structure for `material_type`
-- ----------------------------
DROP TABLE IF EXISTS `material_type`;
CREATE TABLE `material_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '材料类型id',
  `name` varchar(50) NOT NULL COMMENT '材料类型名',
  `intro` varchar(50) DEFAULT NULL COMMENT '材料类型说明',
  `description` varchar(255) DEFAULT NULL COMMENT '材料类型备注',
  `is_required` int(1) NOT NULL DEFAULT '0' COMMENT '材料类型是否必交，1表示是，0表示否',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态，1表示开放，0表示禁止',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of material_type
-- ----------------------------
INSERT INTO `material_type` VALUES ('1', '教学材料', null, null, '0', '1');
INSERT INTO `material_type` VALUES ('2', '教学大纲', null, null, '0', '1');
INSERT INTO `material_type` VALUES ('3', '课程教学进度表', null, null, '1', '1');
INSERT INTO `material_type` VALUES ('4', '实验教学进度表', null, null, '1', '1');
INSERT INTO `material_type` VALUES ('5', '网络课程统计表', null, null, '1', '1');
INSERT INTO `material_type` VALUES ('6', '过程性评价申请表', null, null, '0', '1');
INSERT INTO `material_type` VALUES ('7', '过程性评价总结材料', null, null, '0', '1');

-- ----------------------------
-- Table structure for `plan`
-- ----------------------------
DROP TABLE IF EXISTS `plan`;
CREATE TABLE `plan` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '排课表id',
  `course_id` int(11) DEFAULT NULL COMMENT '课程id',
  `course_name` varchar(50) DEFAULT NULL COMMENT '课程名臣',
  `class_names` varchar(255) DEFAULT NULL COMMENT '授课班级id',
  `tch_id` int(11) DEFAULT NULL COMMENT '教师id',
  `tch_name` varchar(50) NOT NULL COMMENT '教师姓名',
  `tch_title` varchar(50) NOT NULL COMMENT '教师职称',
  `stu_num` int(5) NOT NULL COMMENT '上课学生人数',
  `exam_method` varchar(50) DEFAULT NULL COMMENT '考核方式',
  `start_stop_cycle` varchar(50) NOT NULL COMMENT '起止周',
  `hours` varchar(50) NOT NULL COMMENT '学时（每次上课）',
  `total_hours` int(5) NOT NULL COMMENT '总学时',
  `week_hours` int(5) DEFAULT NULL COMMENT '周学时',
  `credit` int(5) NOT NULL COMMENT '学分',
  `theoretical_hours` int(5) DEFAULT NULL COMMENT '理论学时',
  `experimental_hours` int(5) DEFAULT NULL COMMENT '实验学时',
  `semester_id` int(11) DEFAULT NULL COMMENT '学期id',
  `year_id` int(11) DEFAULT NULL COMMENT '学年id',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态，1表示开放，0表示禁止',
  PRIMARY KEY (`id`),
  KEY `fk_plan_semester_id` (`semester_id`),
  KEY `fk_plan_year_id` (`year_id`),
  KEY `fk_plan_tch_id` (`tch_id`),
  CONSTRAINT `fk_plan_semester_id` FOREIGN KEY (`semester_id`) REFERENCES `semester` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_plan_tch_id` FOREIGN KEY (`tch_id`) REFERENCES `tch` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_plan_year_id` FOREIGN KEY (`year_id`) REFERENCES `year` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of plan
-- ----------------------------
INSERT INTO `plan` VALUES ('1', '12344', '计算机网络', '计141,计142，软工142', '1', '陈翔', '博士', '47', '期末考核', '1-16周', '2.0-1.0', '47', '12', '4', '24', '23', '1', '1', '1');

-- ----------------------------
-- Table structure for `resource`
-- ----------------------------
DROP TABLE IF EXISTS `resource`;
CREATE TABLE `resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '权限id',
  `name` varchar(50) NOT NULL COMMENT '权限名',
  `pid` int(11) DEFAULT NULL COMMENT '父级权限id',
  `url` varchar(50) DEFAULT NULL COMMENT '权限路径',
  `intro` varchar(50) DEFAULT NULL COMMENT '权限说明',
  `icon` varchar(50) DEFAULT NULL COMMENT '权限图标',
  `seq` int(1) DEFAULT '1' COMMENT '排序',
  `type` int(1) DEFAULT '1' COMMENT '权限类型，1表示子权限，0表示父级权限',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态，0表示禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of resource
-- ----------------------------
INSERT INTO `resource` VALUES ('1', '公共页', null, '/message', null, 'home', '1', '0', '1');
INSERT INTO `resource` VALUES ('2', '信息管理', null, '/info', null, 'contacts', '1', '0', '1');
INSERT INTO `resource` VALUES ('3', '教学进度', null, '/schedule', null, 'compass', '1', '0', '1');
INSERT INTO `resource` VALUES ('21', '系部信息管理', '2', '/info/dept', null, null, '1', '1', '1');
INSERT INTO `resource` VALUES ('22', '专业信息管理', '2', '/info/major', null, null, '1', '1', '1');
INSERT INTO `resource` VALUES ('31', '排班管理', '3', '/schedule/plan', null, null, '1', '1', '1');

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `name` varchar(50) NOT NULL COMMENT '角色名',
  `icon` varchar(255) DEFAULT NULL COMMENT '角色图标',
  `seq` int(1) DEFAULT NULL COMMENT '排序',
  `description` varchar(255) DEFAULT NULL COMMENT '角色备注',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态，0表示禁止',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '学生', null, '1', null, '1');
INSERT INTO `role` VALUES ('2', '教师', null, null, null, '1');
INSERT INTO `role` VALUES ('3', '系部管理员', null, null, null, '1');
INSERT INTO `role` VALUES ('4', '超级管理员', null, null, null, '1');

-- ----------------------------
-- Table structure for `role_resource`
-- ----------------------------
DROP TABLE IF EXISTS `role_resource`;
CREATE TABLE `role_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色权限表',
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `resource_id` int(11) NOT NULL COMMENT '权限id',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态，0表示禁用',
  PRIMARY KEY (`id`),
  KEY `fk_rr_role_id` (`role_id`),
  KEY `fk_rr_resource_id` (`resource_id`),
  CONSTRAINT `fk_rr_resource_id` FOREIGN KEY (`resource_id`) REFERENCES `resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_rr_role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_resource
-- ----------------------------
INSERT INTO `role_resource` VALUES ('1', '1', '1', '1');
INSERT INTO `role_resource` VALUES ('2', '2', '1', '1');
INSERT INTO `role_resource` VALUES ('3', '2', '2', '1');
INSERT INTO `role_resource` VALUES ('4', '2', '21', '1');
INSERT INTO `role_resource` VALUES ('5', '2', '22', '1');

-- ----------------------------
-- Table structure for `semester`
-- ----------------------------
DROP TABLE IF EXISTS `semester`;
CREATE TABLE `semester` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '学期id',
  `name` varchar(50) NOT NULL COMMENT '学期名称',
  `begin_date` date DEFAULT NULL COMMENT '开始日期',
  `end_date` date DEFAULT NULL COMMENT '结束日期',
  `description` varchar(255) DEFAULT NULL COMMENT '学期备注',
  `year_id` int(11) NOT NULL COMMENT '所属学年id',
  `is_now` int(1) NOT NULL DEFAULT '0' COMMENT '是否当前学期',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态，0表示禁用',
  PRIMARY KEY (`id`),
  KEY `fk_semester_year_id` (`year_id`),
  CONSTRAINT `fk_semester_year_id` FOREIGN KEY (`year_id`) REFERENCES `year` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of semester
-- ----------------------------
INSERT INTO `semester` VALUES ('1', '16秋', null, null, '第一学期', '1', '0', '1');
INSERT INTO `semester` VALUES ('3', '17春', null, null, null, '2', '1', '1');
INSERT INTO `semester` VALUES ('4', '17秋', null, null, null, '2', '0', '1');

-- ----------------------------
-- Table structure for `stu`
-- ----------------------------
DROP TABLE IF EXISTS `stu`;
CREATE TABLE `stu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '学生表id',
  `stu_id` varchar(50) NOT NULL COMMENT '学生学号',
  `name` varchar(50) NOT NULL COMMENT '学生姓名',
  `gender` int(1) NOT NULL COMMENT '学生性别',
  `dept_id` int(11) NOT NULL COMMENT '所属系部id',
  `major_id` int(11) NOT NULL COMMENT '所属专业id',
  `class_id` int(11) NOT NULL COMMENT '所属班级id',
  `grade` int(1) DEFAULT NULL COMMENT '年纪',
  `mobile` varchar(13) DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `birthday` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '学生生日',
  `description` varchar(255) DEFAULT NULL COMMENT '学生备注',
  PRIMARY KEY (`id`),
  KEY `fk_stu_dept_id` (`dept_id`),
  KEY `fk_stu_major_id` (`major_id`),
  KEY `fk_stu_class_id` (`class_id`),
  CONSTRAINT `fk_stu_class_id` FOREIGN KEY (`class_id`) REFERENCES `aclass` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_stu_dept_id` FOREIGN KEY (`dept_id`) REFERENCES `dept` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_stu_major_id` FOREIGN KEY (`major_id`) REFERENCES `major` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stu
-- ----------------------------
INSERT INTO `stu` VALUES ('1', '2014211116', '骆金参', '1', '1', '1', '4', '4', '17816869505', '1095847440@qq.com', '1996-04-12 21:36:00', '宅男');

-- ----------------------------
-- Table structure for `task`
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '任务id',
  `name` varchar(50) NOT NULL COMMENT '任务名',
  `publisher_id` int(11) NOT NULL COMMENT '发布用户id',
  `content` text COMMENT '任务内容',
  `description` varchar(255) DEFAULT NULL COMMENT '任务备注',
  `begin_dt` datetime DEFAULT NULL COMMENT '开始日期',
  `end_dt` datetime DEFAULT NULL COMMENT '截止日期',
  `fulfillment` double DEFAULT NULL COMMENT '完成进度',
  `completed_num` int(11) DEFAULT NULL COMMENT '完成任务数',
  `total_num` int(11) DEFAULT NULL COMMENT '总任务数',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`id`),
  KEY `fk_publisher_id` (`publisher_id`),
  CONSTRAINT `fk_publisher_id` FOREIGN KEY (`publisher_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES ('1', '完成期中考核', '3', '各位计算据系对的教师，你们好，期中考试要开始了', null, '2017-05-24 21:56:37', '2017-05-26 21:56:40', '12.7', '4', '12', '1');

-- ----------------------------
-- Table structure for `task_user`
-- ----------------------------
DROP TABLE IF EXISTS `task_user`;
CREATE TABLE `task_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '任务用户表id',
  `task_id` int(11) NOT NULL COMMENT '任务id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `begin_dt` datetime DEFAULT NULL COMMENT '单独任务的开始日期',
  `end_dt` datetime DEFAULT NULL COMMENT '单独任务的截止日期',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  PRIMARY KEY (`id`),
  KEY `fk_tu_task_id` (`task_id`),
  KEY `fk_tu_user_id` (`user_id`),
  CONSTRAINT `fk_tu_task_id` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tu_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task_user
-- ----------------------------
INSERT INTO `task_user` VALUES ('1', '1', '2', '2017-05-18 21:57:59', '2017-06-03 21:58:02', '0');

-- ----------------------------
-- Table structure for `tch`
-- ----------------------------
DROP TABLE IF EXISTS `tch`;
CREATE TABLE `tch` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '教师表id',
  `job_num` varchar(50) NOT NULL COMMENT '教师工号',
  `name` varchar(50) NOT NULL COMMENT '教师姓名',
  `gender` int(1) DEFAULT NULL COMMENT '教师性别',
  `title` varchar(50) DEFAULT NULL COMMENT '教师职称',
  `qualification` varchar(50) DEFAULT NULL COMMENT '最后学历',
  `qualification_school` varchar(255) DEFAULT NULL COMMENT '最后学历毕业学校',
  `degree` varchar(50) DEFAULT NULL COMMENT '最后学位',
  `degree_school` varchar(255) DEFAULT NULL COMMENT '最后学位毕业学校',
  `research_area` varchar(255) DEFAULT NULL COMMENT '研究方向',
  `tel` varchar(13) DEFAULT NULL COMMENT '家庭电话',
  `mobile` varchar(13) DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) DEFAULT NULL COMMENT '教师邮箱',
  `birthday` date DEFAULT NULL COMMENT '生日',
  `description` varchar(255) DEFAULT NULL COMMENT '教师备注',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态，1表示开放，0表示禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tch
-- ----------------------------
INSERT INTO `tch` VALUES ('1', '123456', '王某某', '1', '博士', '博士', '浙江大学', '博士', '浙江大学', '图像识别', '65167355', '17816869505', '1095847440@qq.com', '2017-05-24', null, '1');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户表id',
  `user_id` varchar(50) NOT NULL COMMENT '用户登录账号，学号或者工号',
  `pwd` char(32) NOT NULL COMMENT '用户密码',
  `salt` char(32) NOT NULL COMMENT '密码盐',
  `nickname` varchar(50) DEFAULT NULL COMMENT '用户昵称',
  `icon` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `user_type` int(1) DEFAULT '1' COMMENT '不使用RBAC时存储用户类型',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '2014211116', '202CB962AC59075B964B07152D234B70', '202CB962AC59075B964B07152D234B70', 'luo0412', null, '1', '1');
INSERT INTO `user` VALUES ('2', '123456', '202CB962AC59075B964B07152D234B70', '202CB962AC59075B964B07152D234B70', 'wang1234', null, '2', '1');
INSERT INTO `user` VALUES ('3', '陈主任', '202CB962AC59075B964B07152D234B70', '202CB962AC59075B964B07152D234B70', 'chen123', null, '3', '1');
INSERT INTO `user` VALUES ('4', 'admin', '202CB962AC59075B964B07152D234B70', '202CB962AC59075B964B07152D234B70', null, null, '4', '1');

-- ----------------------------
-- Table structure for `user_role`
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户角色表id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态，0表示禁用',
  PRIMARY KEY (`id`),
  KEY `fk_ur_user_id` (`user_id`),
  KEY `fk_ur_role_id` (`role_id`),
  CONSTRAINT `fk_ur_role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_ur_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES ('1', '1', '1', '1');
INSERT INTO `user_role` VALUES ('2', '2', '2', '1');
INSERT INTO `user_role` VALUES ('3', '3', '3', '1');
INSERT INTO `user_role` VALUES ('4', '4', '4', '1');

-- ----------------------------
-- Table structure for `year`
-- ----------------------------
DROP TABLE IF EXISTS `year`;
CREATE TABLE `year` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '学年id',
  `name` varchar(50) NOT NULL COMMENT '学年名',
  `is_now` int(1) NOT NULL DEFAULT '0' COMMENT '是否当前学年',
  `description` varchar(255) DEFAULT NULL COMMENT '学年备注',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '状态，0表示禁用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of year
-- ----------------------------
INSERT INTO `year` VALUES ('1', '2016', '0', null, '1');
INSERT INTO `year` VALUES ('2', '2017', '0', null, '1');
