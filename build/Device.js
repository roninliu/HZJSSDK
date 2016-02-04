"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ------------------------------------------------------------------
 * 判断设备平台
 * @date     2016-01-30
 * @author   RoninLiu<roninliu@foxmail.com>
 * ------------------------------------------------------------------
 */

var Device = function () {
	/**
  * [constructor 构造函数]
  */

	function Device() {
		_classCallCheck(this, Device);
	}

	_createClass(Device, [{
		key: "getSystem",

		/**
   * [getSystem 获取系统平台信息]
   * @return {String} [平台系统名称]
   */
		value: function getSystem() {
			var useragent = window.navigator.userAgent.toLowerCase();
			console.log(useragent);
			console.log(useragent.toUpperCase());
			if (/mobile/i.test(useragent)) {
				if (/iphone/i.test(useragent)) {
					return "ios";
				} else if (/android/i.test(useragent)) {
					return "android";
				} else if (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(useragent.toUpperCase())) {
					return "other";
				}
			} else {
				return "pc";
			}
		}
	}, {
		key: "isWeiChat",

		/**
   * [isWeiChat 检测是否在微信浏览器中]
   * @return {Boolean} [true | false]
   */
		value: function isWeiChat() {
			var useragent = window.navigator.userAgent.toLowerCase();
			console.log(useragent);
			if (/mobile/i.test(useragent)) {
				if (/micromessenger/i.test(_userAgent)) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		}
	}]);

	return Device;
}();