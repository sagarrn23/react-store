import axios from 'axios';

/**
 * @description Default configuration
 */
const domain = 'http://localhost/sagar/';
const mainInstance = axios.create({
	baseURL: `${domain}wp-json/wp/v2/`
});

export default mainInstance;
