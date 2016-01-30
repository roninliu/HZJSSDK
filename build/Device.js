"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ------------------------------------------------------------------
 * 判断设备平台，继承Utils
 * @date     2016-01-30
 * @author   RoninLiu<roninliu@foxmail.com>
 * ------------------------------------------------------------------
 */

var Device = function (_Utils) {
	_inherits(Device, _Utils);

	/**
  * [constructor 构造函数]
  */

	function Device() {
		_classCallCheck(this, Device);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Device).call(this));
	}

	_createClass(Device, [{
		key: "getSystem",
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
	}]);

	return Device;
}(Utils);