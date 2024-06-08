"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import YouTube, { YouTubeProps } from "react-youtube";

import { IPlaylist } from "@/app/types";
import { getFromLocalStorage } from "@/app/utils";
// import { useRewardContext } from "@/app/context/RewardProvider";
// import { usePlaylistContext } from "@/app/context/PlaylistProvider";

interface VideoPlayerProps {
	videoId: string;
}

const opts: YouTubeProps["opts"] = {
	playerVars: {
		// https://developers.google.com/youtube/player_parameters
		autoplay: "1",
	},
};

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const playlistName = searchParams.get("list");
	const playlistVideoIndex = Number(searchParams.get("index"));
	const savedPlaylists: IPlaylist[] = getFromLocalStorage("playlists");
	// const { setReward } = useRewardContext();
	// const { playlist } = usePlaylistContext();
	const [started, setStarted] = useState(false);

	function goToNextVideo() {
		// auto play feature

		const selectedPlaylist = savedPlaylists.find(
			(p) => p.name === playlistName
		)?.playlist;

		if (selectedPlaylist) {
			// check that we are not at the end of the playlist
			if (playlistVideoIndex !== selectedPlaylist.length) {
				const nextVideosId =
					selectedPlaylist[1 - playlistVideoIndex + 1].videoId;

				router.push(
					`/video/${nextVideosId}?list=${playlistName}&index=${
						Number(playlistVideoIndex) + 1
					}`,
					{ scroll: false }
				);
			}
		}
	}

	// clear rewards on first video load
	// useEffect(() => {
	// 	setReward(0);
	// }, []);

	// rewards timer
	// useEffect(() => {
	// 	let interval: any = null;
	// 	if (started) {
	// 		interval = setInterval(() => {
	// 			setReward((prevReward) => prevReward + 0.1);
	// 		}, 1000);
	// 	} else {
	// 		clearInterval(interval);
	// 	}
	// 	return () => clearInterval(interval);
	// }, [started]);

	return (
		<YouTube
			onPlay={() => {
				setStarted(true);
			}}
			onPause={() => setStarted(false)}
			onEnd={() => {
				// having a playlist name on URL query means we are on a playlist
				if (playlistName) {
					goToNextVideo();
				}
				setStarted(false);
			}}
			videoId={videoId}
			opts={opts}
			iframeClassName="w-full h-64 bg-zinc-800 md:rounded-xl md:h-[20rem] lg:h-[24rem] xl:h-[40rem] 2xl:h-[44rem]"
		/>
	);
}
