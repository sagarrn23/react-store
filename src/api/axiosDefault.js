import axios from 'axios';

/**
 * @description Default axios configuration
 */
// const domain = 'https://websitedemos.net/photographer-08/';
const domain = 'http://localhost/sagar/';
const mainInstance = axios.create({
	baseURL: `${domain}wp-json/wp/v2/`
});

export default mainInstance;
