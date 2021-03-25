import axios from 'axios';

/**
 * @description Default axios configuration
 */
const domain = 'http://35.198.224.201/';
const mainInstance = axios.create({
	baseURL: `${domain}wp-json/wp/v2/`
});

export default mainInstance;
