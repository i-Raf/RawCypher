"use client";

import { IPlaylist } from "@/app/types";
import { getFromLocalStorage } from "@/app/utils";
import { useSearchParams } from "next/navigation";
// import { useRewardContext } from "@/app/context/RewardProvider";
// import { usePlaylistContext } from "@/app/context/PlaylistProvider";
import { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

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
	const searchParams = useSearchParams();
	const playlistName = searchParams.get("list");
	// const { setReward } = useRewardContext();
	// const { playlist } = usePlaylistContext();
	const [started, setStarted] = useState(false);

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
				// auto play feature
				// make sure we are on a playlist by checking if we have a playlist name
				if (playlistName) {
					// find current video index, then redirect to next video's index
				}
				setStarted(false);
			}}
			videoId={videoId}
			opts={opts}
			iframeClassName="w-full h-64 bg-zinc-800 md:rounded-xl md:h-[20rem] lg:h-[24rem] xl:h-[40rem] 2xl:h-[44rem]"
		/>
	);
}
