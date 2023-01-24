interface Event {
	assist: {
		id: number | null;
		name: string | null;
	};
	detail: string;
	player: {
		id: number | null;
		name: string | null;
	};
	time: {
		elapsed: number;
		extra: number | null;
	};
	type: string;
	team: {
		id: number;
		name: string;
	};
}

export default Event;
