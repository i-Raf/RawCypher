"use client";

import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { PlaylistVideo, IPlaylist } from "@/app/types";
import { getFromLocalStorage } from "@/app/utils";
import { OptionsIcon } from "../icons/OptionsIcon";

export default function Playlist() {
	const searchParams = useSearchParams();
	const playlistName = searchParams.get("list");
	const [playlist, setPlaylist] = useState<PlaylistVideo[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

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
							playlist.map((video) => (
								<div
									key={video.videoId}
									className="flex w-full gap-x-4 items-center"
								>
									<Link
										title={video.title}
										href={`/video/${video.videoId}?list=${playlistName}`}
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
										onClick={() => console.log("delete video")}
										className="w-fit h-fit"
										title="remove from playlist"
									>
										<OptionsIcon />
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
