const axios = require('axios');
const { serverURL } = require('./serverInfo');

/** W przyszłości możliwe że dojdzie do standaryzacji Creq */

function Creq_getLocationInfo(reqId) {
	return new Promise((resolve, reject) => {
		if (parseInt(reqId)) {
			axios
				.post(`${serverURL}/getLocationInfo`, {
					locationId: parseInt(reqId),
				})
				.then((res) => {
					console.log(res.data);

					if (res.data.error) {
						throw new Error(res.data.message);
					} else {
						if (res.data.message == null) {
							reject(new Error('Nie ma takiej lokalizacji'));
						} else {
							resolve(res.data);
						}
					}
				})
				.catch((error) => {
					reject(error);
				});
		} else {
			reject(new Error('to nie jest liczba'));
		}
	});
}

module.exports = {
	Creq_getLocationInfo,
};
