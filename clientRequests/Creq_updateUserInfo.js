const axios = require('axios');
const { serverURL } = require('./serverInfo');


/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o aktualizacje informacji o użytkowniku.
 * @function Creq_updateUserInfo
 * @param {object} params Zbiór parametrów w postaci obiektu.
 * @category Creq
 */
function Creq_updateUserInfo(params) {
	return new Promise((resolve, reject) => {
		axios
			.post(`${serverURL}/updateUserInfo`, params)
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
	Creq_updateUserInfo,
};
