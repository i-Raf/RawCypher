"use client";

import Link from "next/link";

import { usePlaylistContext } from "@/app/context/PlaylistProvider";
import { CloseIcon } from "../icons";

export default function Playlist() {
	const { isLoading, playlist, setPlaylist } = usePlaylistContext();

	function removeFromPlaylist(id: string) {
		let filteredPlaylist = playlist.filter((video) => id !== video.videoId);
		setPlaylist(filteredPlaylist);
		localStorage.setItem("playlist", JSON.stringify(filteredPlaylist));
	}

	return (
		<section className="px-4 w-full">
			<h3 className="mb-2 text-lg text-white">Playlist</h3>

			{/* playlist container */}
			<div className="p-4 w-full flex flex-col gap-y-4 border border-zinc-800 rounded-xl">
				{isLoading ? (
					<p className="text-white text-sm">Loading...</p>
				) : playlist.length > 0 ? (
					playlist.map((video) => (
						<div
							key={video.videoId}
							className="flex w-full gap-x-4 items-center"
						>
							<button
								onClick={() => removeFromPlaylist(video.videoId)}
								className="w-fit h-fit"
								title="remove from playlist"
							>
								<CloseIcon width="20" height="20" color="white" />
							</button>

							<Link
								title={video.title}
								href={`/video/${video.videoId}`}
								className="flex w-full gap-x-2"
							>
								{/* thumbnail */}
								<div
									style={{
										backgroundImage: `url('${video.thumbnail}')`,
									}}
									className="h-14 w-1/3 bg-slate-500 bg-cover bg-center bg-no-repeat rounded-lg"
								></div>

								{/* video info */}
								<div className="w-3/4">
									<p className="text-sm text-white max-2-ellipsis">
										{video.title}
									</p>
								</div>
							</Link>
						</div>
					))
				) : (
					<p className="text-zinc-400 text-sm">
						There are no videos on your Playlist yet!
					</p>
				)}
			</div>
		</section>
	);
}
