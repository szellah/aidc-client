const axios = require('axios');
const { serverURL } = require('./serverInfo');


/**
 * Wysyła zapytanie http do servera i pyta korespondującą funkcję Sres o usunięcie lokalizacji.
 * @function Creq_deleteLocation
 * @param {object} params Zbiór parametrów w postaci obiektu.
 * @category Creq
 */
function Creq_deleteLocation(params) {
	return new Promise((resolve, reject) => {
		axios
			.post(`${serverURL}/deleteLocation`, params)
			.then((res) => {
				console.log(res.data);
				resolve(res.data);
			})
			.catch((error) => {
				reject({ error: true, message: error.message });
			});
	});
}

module.exports = {
	Creq_deleteLocation,
};
