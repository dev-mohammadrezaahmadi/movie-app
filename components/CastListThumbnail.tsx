/* disable-eslint */

interface CastListThumnailProps {
	actor: any;
}

const CastListThumbnail: React.FC<CastListThumnailProps> = ({ actor }) => {
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
	const POSTER_SIZE = "w500";
	return (
		<div
			style={{ background: "rgba(0, 0, 0, 0.5)" }}
			className="rounded-md w-[200px] h-[300px] p-5"
		>
			{/* eslint-disable */}
			<img
				src={
					actor.profile_path
						? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
						: ""
				}
				alt="actorthumbnail"
				className="rounded-full w-[150px] h-[150px] object-cover "
			/>
			<div className="mt-5">
				<span className="itext-lg block">{actor.name}</span>
				<i>as</i> <span className="font-bold">{actor.character}</span>
			</div>
		</div>
	);
};

export default CastListThumbnail;
