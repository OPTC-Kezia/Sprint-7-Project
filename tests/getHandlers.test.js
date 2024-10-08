//eslint-disable-next-line no-undef
const config = require('../config')

test('Should return 200 status code', async () => {
	let actualStatusCode;
	try{
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Name should be "Tastes of Paris"', async () => {
	let theResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`);
		theResponseBody = await response.json();
	} catch(error) {
		console.error(error)
	}
	expect(theResponseBody.name).toBe('Tastes of Paris');
});