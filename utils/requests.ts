const API_KEY = process.env.API_KEY;

interface IFetchRequests {
	[request: string]: {
		title: string;
		url: string;
	};
}

const REQUESTS: IFetchRequests = {
	fetchTrending: {
		title: "Trending",
		url: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
	},
	fetchTopRated: {
		title: "Top Rated",
		url: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
	},
	fetchActionMovies: {
		title: "Action",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	fetchComedyMovies: {
		title: "Comedy",
		url: `/dicover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	fetchHorrorMovies: {
		title: "Horror",
		url: `/dicover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	fetchRomanceMovies: {
		title: "Romance",
		url: `/dicover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	fetchMysteryMovies: {
		title: "Mystery",
		url: `/dicover/movie?api_key=${API_KEY}&with_genres=9648`,
	},
	fetchSciFiMovies: {
		title: "Sci-Fi",
		url: `/dicover/movie?api_key=${API_KEY}&with_genres=878`,
	},
	fetchWesternMovies: {
		title: "Western",
		url: `/dicover/movie?api_key=${API_KEY}&with_genres=37`,
	},
	fetchAnimationMovies: {
		title: "Animation",
		url: `/dicover/movie?api_key=${API_KEY}&with_genres=16`,
	},
	fetchTVShows: {
		title: "TV Shows",
		url: `/dicover/movie?api_key=${API_KEY}&with_genres=10770`,
	},
};

export default REQUESTS;
