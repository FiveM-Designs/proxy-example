// FiveM Designs Proxy Examples

const {
	fetchProxyInstances,
	createProxyInstance,
	deleteProxyInstance,
} = require('./functions');

fetchProxyInstances()
	.then(({ data }) => {
		console.log(data);
	})
	.catch((err) =>
		console.log('Unexpected error while trying to fetch proxy instances.')
	);

createProxyInstance({
	origin: 'hamz.fivem.design', // Must have a valid record.
	source: '12039.123123.12312.12', // The product instance IP. You can access window.origin to show the correct data on the subdomain.
	port: '80', // Not required.
})
	.then(({ data }) => {
		console.log(data);
	})
	.catch((err) =>
		console.log('Unexpected error while trying to create proxy instances.')
	);

deleteProxyInstance({
	instanceId: '63b8c6d1eee2fcf5e6d039f1',
})
	.then(({ data }) => {
		console.log(data);
	})
	.catch((err) =>
		console.log('Unexpected error while trying to delete proxy instances.')
	);
