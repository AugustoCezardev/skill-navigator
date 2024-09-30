import { FaSearch } from 'react-icons/fa';
import { LuSettings2 } from 'react-icons/lu';
import Card from './components/Card';
import Header from './components/Header';

export default function Home() {
	return (
		<main>
			<Header />
			<div className="w-full flex flex-col justify-center items-center">
				<div className="md:w-9/12 flex-1 flex-col p-4">
					<div className="flex flex-col gap-2 mb-6">
						<h1 className="font-semibold md:text-3xl text-2xl max-w-xl leading-10">
							“O verdadeiro sinal de inteligência não é o conhecimento, mas a
							imaginação.”
						</h1>
						<h2 className="md:text-xl italic">Albert Einstein</h2>
					</div>
					<div className="flex bg-white rounded-xl p-1 border border-black h-10 min-w-80 max-w-xl shadow-lg">
						<button className="p-1 mr-1" type="submit">
							<FaSearch className="border-black" />
						</button>
						<input
							className="w-full focus:outline-none"
							placeholder="O que vamos aprender?"
						/>
						<button className="ml-auto p-1" type="button">
							<LuSettings2 className="border-black" />
						</button>
					</div>

					<h3 className="italic mt-8">Resultados para "Phyton"</h3>

					<div className="mt-4 grid md:grid-cols-4 sm:grid-cols-3 gap-4">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</main>
	);
}
