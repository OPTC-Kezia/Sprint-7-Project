// eslint-disable-next-line no-undef
const config = require('../config');

const id = 1

const requestBody = {
	'price': 175
};



  
  test('Verify status code is 200', async () => {
    let ourStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		ourStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(ourStatus).toBe(200)
});

test('Price update has been accepted ', async () => {
    let responseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		responseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(responseBody).toEqual({'ok':true

	})
});
