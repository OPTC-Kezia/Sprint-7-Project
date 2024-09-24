// eslint-disable-next-line no-undef
const config = require('../config');

test('Verify status code is 200', async () => {
    let ourStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'DELETE',
			headers: {
			'Content-Type': 'application/json'
			}
		});
		ourStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(ourStatus).toBe(200)
});

test('Test should show response body "ok:true"', async () => {
	let bodyResponse;
	try {
	  deleteResponse = await fetch(`${config.API_URL}/api/v1/kits/5`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	  });
	  bodyResponse = await deleteResponse.json();
	} catch (error) {
	  console.error(error);
	}
	expect(bodyResponse).toEqual({ "ok": true });
  });