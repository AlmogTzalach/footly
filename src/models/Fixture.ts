interface Fixture {
	id: number;
	referee: string;
	timezone: string;
	date: string;
	timestamp: number;
	status: {
		elapsed: number;
		long: string;
		short: string;
	};
	venue: {
		city: string;
		id: number;
		name: string;
	};
}

export default Fixture;
