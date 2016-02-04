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
	};
	/**
	 * [parseURI 获取url参数]
	 * @param  {String}  url [url地址：可选，默认浏览器地址]
	 * @return {Object}      [URL相关参数]
	 */
	parseURI(url = window.location.href) {
		let a = document.createElement("a");
		a.href = url;
		let params = {
			source: url,
			protocol: a.protocol.replace(':', ''),
			host: a.hostname,
			port: a.port,
			query: a.search,
			params: (function() {
				let ret = {};
				let seg = a.search.replace(/^\?/, '').split('&');
				let len = seg.length;
				for (let i = 0; i < len; i++) {
					if (!seg[i]) {
						continue;
					}
					let s = seg[i].split('=');
					ret[s[0]] = s[1];
				}
				return ret;
			})(),
			file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
			hash: a.hash.replace('#', ''),
			path: a.pathname.replace(/^([^\/])/, '/$1'),
			relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
			segments: a.pathname.replace(/^\//, '').split('/')
		}
		return params;
	};
	/**
	 * [getURIParamsByName 获取指定的url中参数]
	 * @param  {String} name [指定key]
	 * @param  {String} url  [url，可选：默认浏览器地址]
	 * @return {String}      [返回获得的参数，未取到返回null]
	 */
	getURIParamsByName(name, url = window.location.href) {
		let a = document.createElement("a");
		a.href = url;
		let query = a.search.replace(/\?/g, "&").substr(1).split("&");
		for (let i = 0; i < query.length; i++) {
			let temp = query[i].split("=");
			if (temp[0] === name) {
				return temp[1];
			} else {
				continue;
			}
		}
		return null;
	}
}