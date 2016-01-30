/**
 * ------------------------------------------------------------------
 * 判断设备平台，继承Utils
 * @date     2016-01-30
 * @author   RoninLiu<roninliu@foxmail.com>
 * ------------------------------------------------------------------
 */
class Device extends Utils {
	/**
	 * [constructor 构造函数]
	 */
	constructor() {
		super();
	};
	/**
	 * [getSystem 获取系统平台信息]
	 * @return {String} [平台系统名称]
	 */
	getSystem() {
		let useragent = window.navigator.userAgent.toLowerCase()
		console.log(useragent);
		console.log(useragent.toUpperCase());
		if ((/mobile/i.test(useragent))) {
			if (/iphone/i.test(useragent)) {
				return "ios";
			} else if (/android/i.test(useragent)) {
				return "android";
			} else if ((/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(useragent.toUpperCase()))) {
				return "other";
			}
		} else {
			return "pc";
		}
	};
	/**
	 * [isWeiChat 检测是否在微信浏览器中]
	 * @return {Boolean} [true | false]
	 */
	isWeiChat() {
		let useragent = window.navigator.userAgent.toLowerCase()
		console.log(useragent);
		if ((/mobile/i.test(useragent))) {
			if (/micromessenger/i.test(_userAgent)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};
}