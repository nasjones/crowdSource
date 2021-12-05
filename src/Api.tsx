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
		const headers = {
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		};
		ensureLeadingSlash(endpoint);
		let response = await axios.get(`${BASE_API_URL}${endpoint}`, { headers });
		return response.data;
	} catch (err) {
		console.log(err);
		const message = err.response
			? err.response.data.error.message
			: "Server Error";
		return {
			error: true,
			message: message,
		};
	}
}

/**
 *
 * @param endpoint The endpoint of the api you wish to post your data to
 * @param data the data you wish to provide it is not required
 */
async function Post(endpoint: string, data: object = {}) {
	try {
		const headers = {
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		};
		ensureLeadingSlash(endpoint);
		let response = await axios.post(`${BASE_API_URL}${endpoint}`, data, {
			headers,
		});
		return { error: false, message: "", data: response.data };
	} catch (err) {
		console.log(err);
		const message = err.response
			? err.response.data.error.message
			: "Server Error";
		return {
			error: true,
			message: message,
		};
	}
}

function ensureLeadingSlash(endpoint: string) {
	if (endpoint[0] !== "/") {
		throw new ErrorEvent("First character of endpoint must be '/'");
	}
}

const ApiExport = { Fetch, Post };
export default ApiExport;
