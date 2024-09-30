export default function Header() {
	return (
		<div className="relative w-full">
			<header className="w-full lg:w-2/3 md:w-2/3 px-4 flex h-24 items-center justify-between mx-auto z-10">
				<div className="flex items-baseline gap-1">
					<h3 className="font-Lobster text-xl">LearnSphere</h3>
					<div className="bg-orange-500 rounded-full w-1 h-1" />
				</div>
				<div className="ml-auto mr-2 space-x-4">
					<button
						type="button"
						className="hover:text-black/40 transition-all rounded px-2 py-1 border-black font-medium text-black"
					>
						Entrar
					</button>
					<button
						type="button"
						className="hover:bg-black/70 transition-all rounded-full px-4 py-2 text-white bg-black font-medium shadow-md"
					>
						Login
					</button>
				</div>
			</header>
		</div>
	);
}
