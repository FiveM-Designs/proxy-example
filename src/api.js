const axios = require('axios');

const API_Key = '129319023120391239';

const API = axios.create({
	baseURL: 'https://api.fivem.design/proxys',
	headers: {
		APIKey: API_Key,
	},
});

module.exports = API;
