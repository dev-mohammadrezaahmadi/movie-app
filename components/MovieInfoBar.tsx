import { ClockIcon, CashIcon, TicketIcon } from "@heroicons/react/outline";
import { calcTime, convertMoney } from "../utils/converters";

interface MovieInfoBarProps {
	time: number;
	budget: number;
	revenue: number;
}

const MovieInfoBar: React.FC<MovieInfoBarProps> = ({
	budget,
	time,
	revenue,
}) => {
	return (
		<div className="bg-black">
			<div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row justify-center md:space-x-2 p-4">
				<div className="flex border rounded-sm p-2 border-green-500">
					<ClockIcon className="w-[24px] mr-2" />
					<span className="">Running time: {calcTime(time)}</span>
				</div>
				<div className="flex border rounded-sm p-2 border-green-500">
					<CashIcon className="w-[24px] mr-2" />
					<span className="">Budget: {convertMoney(budget)}</span>
				</div>
				<div className="flex border rounded-sm p-2 border-green-500">
					<TicketIcon className="w-[24px] mr-2" />
					<span className="">Revenue: {convertMoney(revenue)}</span>
				</div>
			</div>
		</div>
	);
};

export default MovieInfoBar;
