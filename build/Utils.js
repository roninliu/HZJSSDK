'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ------------------------------------------------------------------
 * JSSDK Utils 基类
 * @date     2016-01-30
 * @author   RoninLiu<roninliu@foxmail.com>
 * ------------------------------------------------------------------
 */

var Utils = function () {
	/**
  * [constructor 构造函数]
  */

	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, [{
		key: 'getIntervalRandom',

		/**
   * [getIntervalRandom 生成指定区间的随机数，默认0到1之间的随机数]
   * @param  {Number} start [随机数区间开始]
   * @param  {Number} end   [随机数区间结束]
   * @return {Number}       [生成的随机数]
   */
		value: function getIntervalRandom() {
			var start = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
			var end = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

			if (end === 1) {
				var random = Math.random() * (end - start + 1) + start;
				return random;
			} else {
				var random = parseInt(Math.random() * (end - start + 1) + start);
				return random;
			}
		}
	}, {
		key: 'generateUUID',

		/**
   * [generateUUID 根据时间戳生成UUID]
   * @param  {Date}   timestamps [时间戳：可选]
   * @return {String}            [生成的UUID]
   */
		value: function generateUUID() {
			var timestamps = arguments.length <= 0 || arguments[0] === undefined ? new Date().valueOf() : arguments[0];

			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (timestamps + Math.random() * 16) % 16 | 0;
				timestamps = Math.floor(timestamps / 16);
				return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
			});
			return uuid;
		}
	}]);

	return Utils;
}();