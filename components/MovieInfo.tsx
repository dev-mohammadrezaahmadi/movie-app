import {
	BACKDROP_SIZE,
	IMAGE_BASE_URL,
	POSTER_SIZE,
} from "../constants/constants";

interface MovieInfoProps {
	movie: any;
	directors: any | any[];
}

const MovieInfo: React.FC<MovieInfoProps> = ({ directors, movie }) => {
	return (
		<div
			style={{
				background: movie.backdrop_path
					? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
					: "#000",
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%",
				padding: "20px 40px",
			}}
		>
			<div
				style={{ background: "rgba(0, 0, 0, 0.7)" }}
				className="flex flex-col md:flex-row my-0 mx-auto relative max-w-7xl min-h-[450px] rounded-sm"
			>
				<div className="flex">
					{/* eslint-disable */}
					<img
						src={
							movie.poster_path
								? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
								: ""
						}
						alt=""
						className=""
					/>
				</div>
				<div className="p-10 text-white overflow-hidden">
					<h1 className="text-2xl font-extrabold md:text-5xl">{movie.title}</h1>
					<h3 className="text-base mt-8 font-bold">PLOT:</h3>
					<p className="text-md md:text-justify">{movie.overview}</p>
					<h3 className="text-base mt-8 font-bold">IMDB Rating</h3>
					<div className="flex items-center  width-[190px] height-[20px]">
						<meter
							min="0"
							max="100"
							optimum={100}
							low={40}
							high={70}
							value={movie.vote_average * 10}
						/>
						<p className="ml-10">{movie.vote_average}</p>
					</div>
					{directors.length > 1 ? (
						<h3 className="text-base mt-8 font-bold">DIRECTORS</h3>
					) : (
						<h3 className="text-base mt-8 font-bold">DIRECTOR</h3>
					)}
					{directors.map((director: any, i: number) => (
						<p key={i} className="m-0">
							{director.name}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieInfo;
