// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  "name": "tonysChocolate",
  "cardId": 3
}

test('Verify status code is 201', async () => {
    let ourStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		ourStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(ourStatus).toBe(201)
});

const requestBody2 = {
    "productsList": [
        {
            "id": 10,
            "quantity": 2
        }
    ]
}

test('response body should contain name of kit', async () => {
	let ourResponse;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5/products`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody2)
		});
		ourResponse = await response.json();
	} catch (error) {
		console.error(error)
	}
	expect(ourResponse['name']).toBe('Pasta');
});