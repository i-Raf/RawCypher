"use client";

import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { PlaylistVideo, IPlaylist } from "@/app/types";
import { getFromLocalStorage } from "@/app/utils";
import { CloseIcon } from "../icons";

export default function Playlist() {
	const searchParams = useSearchParams();
	const playlistName = searchParams.get("list");
	const [playlist, setPlaylist] = useState<PlaylistVideo[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	function removeFromPlaylist(videoId: string, playlistName: string) {
		// update ui
		const updatedPlaylist = playlist.filter(
			(video) => video.videoId !== videoId
		);
		setPlaylist(updatedPlaylist);

		// update local storage
		const savedPlaylists: IPlaylist[] = getFromLocalStorage("playlists");
		if (savedPlaylists) {
			let updatedPlaylists = savedPlaylists.map((p) => {
				if (p.name === playlistName) {
					return { name: playlistName, playlist: updatedPlaylist };
				}
				return p;
			});
			localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
		}
	}

	useEffect(() => {
		const savedPlaylists: IPlaylist[] = getFromLocalStorage("playlists");
		if (savedPlaylists) {
			let selectedPlaylist = savedPlaylists.find(
				(playlist) => playlist.name === playlistName
			);
			if (selectedPlaylist) {
				setPlaylist(selectedPlaylist.playlist);
			}
		}
		setIsLoading(false);
	}, []);

	return (
		<div className="lg:w-1/5 xl:w-1/4">
			{playlistName && playlist.length > 0 && (
				<section className="px-4 w-full">
					<h3 className="mb-2 text-lg text-white">Playlist</h3>

					{/* playlist container */}
					<div className="p-4 w-full flex flex-col gap-y-4 border border-zinc-800 rounded-xl">
						{isLoading ? (
							<p className="text-white text-sm">Loading...</p>
						) : (
							playlist.map((video, index) => (
								<div
									key={video.videoId}
									className="relative flex w-full gap-x-4 items-center"
								>
									<Link
										title={video.title}
										href={`/video/${video.videoId}?list=${playlistName}&index=${
											index + 1
										}`}
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

									<button
										onClick={() =>
											removeFromPlaylist(video.videoId, playlistName)
										}
										className="w-fit h-fit"
										title="remove from playlist"
									>
										<CloseIcon width="20px" height="20px" color="white" />
									</button>
								</div>
							))
						)}
					</div>
				</section>
			)}
		</div>
	);
}
