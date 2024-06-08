"use client";

import { useEffect, useState } from "react";

import { IPlaylist, PlaylistVideo } from "@/app/types";
import { getFromLocalStorage } from "@/app/utils";

interface Props {
	value: string;
	label: string;
	index: number;
	videoId: string;
	removeVideoFromPlaylist: (playlistName: string, videoId: string) => void;
	addVideoToPlaylist: (playlistName: string) => void;
}

export default function Checkbox({
	value,
	label,
	index,
	videoId,
	removeVideoFromPlaylist,
	addVideoToPlaylist,
}: Props) {
	let playlists: IPlaylist[] = getFromLocalStorage("playlists");
	const [defaultCheck, setDefaultCheck] = useState<boolean | undefined>(false);

	useEffect(() => {
		if (playlists) {
			const isVideoIdInArray = playlists
				.find((playlist) => playlist.name === value)
				?.playlist.some((video) => video.videoId === videoId);

			setDefaultCheck(isVideoIdInArray);
		}
	}, []);

	return (
		<label
			className="flex items-center gap-x-2 cursor-pointer"
			htmlFor={`checkbox-${index}`}
		>
			<input
				className="cursor-pointer"
				type="checkbox"
				id={`checkbox-${index}`}
				checked={defaultCheck}
				onChange={(e) => {
					if (e.target.checked) {
						// add video to playlist
						addVideoToPlaylist(label);
						alert("Video added to playlist");
						setDefaultCheck(true);
					} else {
						// remove video from playlist
						removeVideoFromPlaylist(label, videoId);
						alert("Video removed from playlist");
						setDefaultCheck(false);
					}
				}}
				value={value}
			/>

			{label}
		</label>
	);
}
