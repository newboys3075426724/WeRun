/**
 * Notes: 表格实体
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2025-06-23 19:20:00 
 */

const BaseProjectModel = require('./base_project_model.js');

class EnrollModel extends BaseProjectModel {

}

// 集合名
EnrollModel.CL = BaseProjectModel.C('enroll');

EnrollModel.DB_STRUCTURE = {
	_pid: 'string|true',
	ENROLL_ID: 'string|true',

	ENROLL_TITLE: 'string|true|comment=标题',
	ENROLL_STATUS: 'int|true|default=1|comment=状态 0=未启用,1=使用中',

	ENROLL_CATE_ID: 'string|true|default=0|comment=分类',
	ENROLL_CATE_NAME: 'string|false|comment=分类冗余',

	ENROLL_START: 'int|false|comment=开始时间',
	ENROLL_END: 'int|false|comment=结束时间',
	ENROLL_DAY_CNT: 'int|false|comment=持续天数',

	ENROLL_ORDER: 'int|true|default=9999',
	ENROLL_VOUCH: 'int|true|default=0',

	ENROLL_FORMS: 'array|true|default=[]',
	ENROLL_OBJ: 'object|true|default={}',

	ENROLL_JOIN_FORMS: 'array|true|default=[]',

	ENROLL_DAYS: 'array|true|default=[]',

	ENROLL_QR: 'string|false',
	ENROLL_VIEW_CNT: 'int|true|default=0',
	ENROLL_JOIN_CNT: 'int|true|default=0',
	ENROLL_USER_CNT: 'int|true|default=0',

	ENROLL_USER_LIST: 'array|true|default=[]|comment={name,id,pic}',

	ENROLL_ADD_TIME: 'int|true',
	ENROLL_EDIT_TIME: 'int|true',
	ENROLL_ADD_IP: 'string|false',
	ENROLL_EDIT_IP: 'string|false',
};

// 字段前缀
EnrollModel.FIELD_PREFIX = "ENROLL_";

/**
 * 状态 0=未启用,1=使用中 
 */
EnrollModel.STATUS = {
	UNUSE: 0,
	COMM: 1
};



module.exports = EnrollModel;