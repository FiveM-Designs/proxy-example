const axios = require('axios');

const API_Key = '';

const API = axios.create({
	baseURL: 'https://api.fivem.design/proxys',
	headers: {
		APIKey: API_Key,
	},
});

module.exports = API;
