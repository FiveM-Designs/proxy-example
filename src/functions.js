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

module.exports = {
	deleteProxyInstance,
	fetchProxyInstances,
	createProxyInstance,
};
