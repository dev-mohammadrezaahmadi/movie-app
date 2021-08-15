import CastThumbnail from "./CastListThumbnail";

interface CastListProps {
	cast: any[];
}

const CastList: React.FC<CastListProps> = ({ cast }) => {
	return (
		<div className="w-full p-10 relative">
			<h2 className="font-bold text-3xl uppercase py-5">cast</h2>
			<div className="flex overflow-x-scroll w-full space-x-4 scrollbar-hide">
				{cast
					.map((actor: any, i: number) => (
						<CastThumbnail key={actor.id} actor={actor} />
					))
					.map((actor: any, i: number) => (
						<div className="border border-green-500 rounded-md" key={i}>
							{actor}
						</div>
					))}
			</div>
		</div>
	);
};

export default CastList;
