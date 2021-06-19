const axios = require('axios');
const { serverURL } = require('./serverInfo');

/** W przyszłości możliwe że dojdzie do standaryzacji Creq */

function Creq_addNewUser(params) {
	return new Promise((resolve, reject) => {
		axios
			.post(`${serverURL}/addNewUser`, params)
			.then((res) => {
				console.log(res.data);
				if (res.data.error) {
					reject(new Error(res.data.message));
				} else {
					resolve(res.data);
				}
			})
			.catch((error) => {
				reject({ error: true, message: error.message });
			});
	});
}

module.exports = {
	Creq_addNewUser,
};
