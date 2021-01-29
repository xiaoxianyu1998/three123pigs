import config from './config.js';

export default (url, data = {}, method = 'GET') => {
	return new Promise((reslove, reject) => {
		uni.request({
			url: config.host + url,
			data,
			method,
			success: (res) => {
				reslove(res.data);
			},
			fail: (err) => {
				reject(err);
			}
		})
	})
}
