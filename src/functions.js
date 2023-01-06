const API = require('./api');

const fetchProxyInstances = () => {
	return API.get('/fetch');
};

const createProxyInstance = (data) => {
	return API.post('/create', data);
};

const deleteProxyInstance = (data) => {
	return API.post('/delete', data);
};

const editProxyInstance = (params, updated) => {
	return API.post('/edit', {
		...params,
		updated,
	});
};

module.exports = {
	deleteProxyInstance,
	fetchProxyInstances,
	createProxyInstance,
	editProxyInstance,
};
