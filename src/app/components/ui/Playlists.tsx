"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { IPlaylist } from "@/app/types";
import { getFromLocalStorage } from "@/app/utils";

export default function Playlists() {
	const [playlists, setPlaylists] = useState<IPlaylist[]>([]);

	useEffect(() => {
		let savedPlaylists: IPlaylist[] = getFromLocalStorage("playlists");
		if (savedPlaylists) {
			setPlaylists(savedPlaylists);
		}
	}, []);

	return (
		<div className="px-4 w-full flex flex-col gap-x-4 gap-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{playlists.length > 0 ? (
				playlists.map((playlist) => (
					<Link
						key={playlist.name}
						href={
							playlist.playlist.length > 0
								? `/video/${
										playlist.playlist[0].videoId
								  }?list=${encodeURIComponent(playlist.name)}&index=1`
								: "/playlists"
						}
						className="relative"
					>
						<div
							style={{
								backgroundImage: `url('${
									playlist.playlist.length > 0 && playlist.playlist[0].thumbnail
								}')`,
							}}
							className="w-full h-56 rounded-xl bg-center bg-no-repeat bg-cover"
						></div>
						<div
							style={{
								zIndex: -1,
							}}
							className="absolute -top-1 left-0 w-full h-56 rounded-xl bg-zinc-800"
						></div>
						<div
							style={{
								zIndex: -2,
							}}
							className="absolute -top-2 left-0 w-full h-56 rounded-xl bg-zinc-900"
						></div>
						<h3 className="mt-1 text-white">{playlist.name}</h3>
					</Link>
				))
			) : (
				<p className="text-white">There are no Playlists yet!</p>
			)}
		</div>
	);
}
