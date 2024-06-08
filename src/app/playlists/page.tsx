import Playlists from "../components/ui/Playlists";

export default async function Page() {
	return (
		<main className="pb-16 pt-16 w-full min-h-screen flex flex-col gap-y-10 items-start md:px-6 lg:pl-16">
			<h2 className="px-4 mt-4 text-lg text-zinc-200 font-semibold">
				Playlists
			</h2>

			{/* playlists container */}
			<Playlists />
		</main>
	);
}
