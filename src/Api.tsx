import axios from "axios";
const BASE_API_URL = process.env.BASE_API_URL || "http://localhost:8000";

/**
 *
 * @param endpoint The endpoint of the api you wish to get info from
 * the endpoint must start with '/'
 *
 */
async function Fetch(endpoint: string) {
	try {
		if (endpoint[0] !== "/") {
			throw new ErrorEvent("First character of endpoint must be '/'");
		}
		let response = await axios.get(`${BASE_API_URL}${endpoint}`);
		console.log(response);
	} catch (err) {
		console.error(err);
	}
}

/**
 *
 * @param endpoint The endpoint of the api you wish to post your data to
 * @param data the data you wish to provide it is not required
 */
async function Post(endpoint: string, data: object = {}) {
	try {
		let response = await axios.post(`${BASE_API_URL}${endpoint}`, data);
		console.log(response);
		return { error: false, message: "" };
	} catch (err: any) {
		console.log(err.response);
		return { error: true, message: err.response.data.error.message };
	}
}

const ApiExport = { Fetch, Post };
export default ApiExport;
