import { GetServerSideProps } from "next";
import CastList from "../components/CastList";
import MovieInfo from "../components/MovieInfo";
import MovieInfoBar from "../components/MovieInfoBar";

interface MovieInfoProps {
	movieCreditInfo: {
		id: number;
		cast: any[];
		crew: any[];
	};
	movieInfo: any;
}

const Movie: React.FC<MovieInfoProps> = ({ movieInfo, movieCreditInfo }) => {
	return (
		<>
			{movieInfo ? (
				<div>
					<MovieInfo
						movie={movieInfo}
						directors={movieCreditInfo.crew.filter(
							(member) => member.job === "Director"
						)}
					/>
					<MovieInfoBar
						time={movieInfo.runtime}
						budget={movieInfo.budget}
						revenue={movieInfo.revenue}
					/>
				</div>
			) : null}
			{movieCreditInfo?.cast ? (
				<div className="flex">
					<CastList cast={movieCreditInfo.cast} />
				</div>
			) : null}
		</>
	);
};

export default Movie;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const movieId = ctx.query.id;

	const movieInfo = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
	).then((res) => res.json());

	const movieCreditInfo = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_KEY}`
	).then((res) => res.json());

	return {
		props: {
			movieInfo,
			movieCreditInfo,
		},
	};
};
