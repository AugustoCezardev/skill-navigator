import Image from 'next/image';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

export default function Card() {
	return (
		<div className="rounded-2xl bg-white  shadow-lg cursor-pointer flex sm:block">
			<div className="w-full relative sm:h-20 sm:w-auto">
				<Image
					src={'/curso.jpg'}
					alt="Imagem de curso de Phyton"
					objectFit="cover"
					fill
					className="object-cover rounded-l-2xl sm:rounded-b-none sm:rounded-t-2xl"
				/>
			</div>
			<div className="p-4 flex flex-col gap-1">
				<div className="flex items-center gap-1">
					<FaLocationPin className="text-gray-400 text-sm" />
					<span className="text-gray-400 text-sm">Hotmart</span>
				</div>
				<span className="font-semibold mb-3 text-xl">Curso de teste </span>
				<span className="text-xs text-gray-400">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, totam?
				</span>
				<span className="text-xs">Professor: Fulano de Tal</span>
				<div className="flex justify-between mt-4">
					<div className="flex items-center gap-1">
						<FaStar className="text-yellow-500" />
						<text>2.5</text>
					</div>
					<div className="flex items-center gap-1">
						<FaDollarSign className="text-yellow-500" />
						<text>100,00</text>
					</div>
				</div>
			</div>
		</div>
	);
}
