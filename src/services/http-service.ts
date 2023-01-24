import axios from 'axios';

export const httpReq = async (path: string, params: {}) => {
	try {
		const options = {
			method: 'GET',
			url: 'https://api-football-beta.p.rapidapi.com/' + path,
			params,
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
				'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
			},
		};

		const res = await axios.request(options);
		const data = await res.data.response;
		return data;
	} catch (err) {
		console.log(err);
	}
};
