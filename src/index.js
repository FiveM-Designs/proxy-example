// FiveM Designs Proxy Examples

const {
	fetchProxyInstances,
	createProxyInstance,
	deleteProxyInstance,
	editProxyInstance,
} = require('./functions');

fetchProxyInstances()
	.then(({ data }) => {
		console.log(data.instances);
	})
	.catch((err) =>
		console.log('Unexpected error while trying to fetch proxy instances.')
	);

createProxyInstance({
	origin: 'vast.fivem.design', // Must have a valid record.
	source: '12039.123123.12312.12', // The product IP.
})
	.then(({ data }) => {
		console.log(data);
	})
	.catch((err) =>
		console.log('Unexpected error while trying to create proxy instances.')
	);

deleteProxyInstance({
	instanceId: '123123',
})
	.then(({ data }) => {
		console.log(data);
	})
	.catch((err) =>
		console.log('Unexpected error while trying to delete proxy instances.')
	);

editProxyInstance(
	{
		instanceId: '123123',
	},
	{
		origin: 'vast.fivem.design', // Must have a valid record.
		source: '12039.123123.12312.12', // The product IP.
	}
)
	.then(({ data }) => {
		console.log(data);
	})
	.catch((err) =>
		console.log('Unexpected error while trying to delete proxy instances.')
	);
