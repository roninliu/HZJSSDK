/**
 * ------------------------------------------------------------------
 * JSSDK Utils 基类
 * @date     2016-01-30
 * @author   RoninLiu<roninliu@foxmail.com>
 * ------------------------------------------------------------------
 */
class Utils {
	/**
	 * [constructor 构造函数]
	 */
	constructor() {};
	/**
	 * [getIntervalRandom 生成指定区间的随机数，默认0到1之间的随机数]
	 * @param  {Number} start [随机数区间开始]
	 * @param  {Number} end   [随机数区间结束]
	 * @return {Number}       [生成的随机数]
	 */
	getIntervalRandom(start = 0, end = 1) {
		if (end === 1) {
			let random = Math.random() * (end - start + 1) + start;
			return random;
		} else {
			let random = parseInt(Math.random() * (end - start + 1) + start);
			return random;
		}
	};
	/**
	 * [generateUUID 根据时间戳生成UUID]
	 * @param  {Date}   timestamps [时间戳：可选]
	 * @return {String}            [生成的UUID]
	 */
	generateUUID(timestamps = new Date().valueOf()) {
		let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			let r = (timestamps + Math.random() * 16) % 16 | 0;
			timestamps = Math.floor(timestamps / 16);
			return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
		});
		return uuid;
	}
}