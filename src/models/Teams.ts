interface Teams {
	home: {
		id: number;
		name: string;
		logo: string;
		winner: boolean;
	};
	away: {
		id: number;
		name: string;
		logo: string;
		winner: boolean;
	};
}

export default Teams;
