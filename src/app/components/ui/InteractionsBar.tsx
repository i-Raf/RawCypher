"use client";

import { useState } from "react";

import { ThumbDownIcon, ThumbUpIcon, ShareIcon } from "../icons";
import { useRewardContext } from "@/app/context/RewardProvider";
import ShareButton from "./ShareButton";
import { usePlaylistContext } from "@/app/context/PlaylistProvider";
import { PlaylistVideo } from "@/app/types";

interface Props {
	videoId: string;
	likes: string;
	title: string;
	thumbnail: string;
}

export default function InteractionsBar({
	videoId,
	likes,
	title,
	thumbnail,
}: Props) {
	const { reward } = useRewardContext();
	const { playlist, setPlaylist } = usePlaylistContext();
	const [likeCount, setLikeCount] = useState<number>(Number(likes) | 0);
	const [dislikeCount, setDislikeCount] = useState<number>(0);

	function addVideoToPlaylist(playlistVideo: PlaylistVideo) {
		if (playlist.some((video) => video.videoId === videoId)) {
			return;
		}
		setPlaylist([...playlist, playlistVideo]);
		localStorage.setItem(
			"playlist",
			JSON.stringify([...playlist, playlistVideo])
		);
	}

	return (
		<section className="px-4 pb-4 flex flex-wrap items-center gap-4 md:px-0">
			<div className="w-fit rounded-full bg-zinc-800 flex-none flex items-center text-zinc-200">
				<button
					onClick={() => setLikeCount((count) => count + 1)}
					title="I like this"
					className="px-2 py-1 flex items-center gap-x-2 rounded-l-full border-r border-zinc-600 hover:bg-zinc-600"
				>
					<ThumbUpIcon color="white" height="20" width="20" />
					<span className="font-semibold text-white text-sm overflow-hidden">
						{Number(likeCount).toLocaleString()}
					</span>
				</button>

				<button
					onClick={() => setDislikeCount((count) => count + 1)}
					title="I dislike this"
					className="px-2 py-1 flex items-center gap-x-2 rounded-r-full hover:bg-zinc-600"
				>
					<ThumbDownIcon color="white" height="20" width="20" />
					<span className="font-semibold text-white text-sm">
						{dislikeCount}
					</span>
				</button>
			</div>

			<ShareButton videoId={videoId} />

			<div className="px-2 py-1 w-28 flex items-center justify-center border-b border-t border-zinc-700">
				<img className="w-6 h-5 md:w-8 md:h-6" src="/logo.webp" alt="" />
				<span className="w-20 text-zinc-200 text-center text-sm md:text-base">
					{reward.toFixed(2)}
				</span>
			</div>

			{playlist.some((video) => videoId === video.videoId) ? (
				<button className="px-4 py-2 flex items-center gap-x-2 text-sm text-zinc-200 border border-zinc-700 rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20px"
						viewBox="0 -960 960 960"
						width="20px"
						fill="red"
					>
						<path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
					</svg>
					Added to Playlist
				</button>
			) : (
				<button
					onClick={() =>
						addVideoToPlaylist({
							order: playlist.length + 1,
							videoId,
							title,
							thumbnail,
						})
					}
					className="px-4 py-2 flex items-center gap-x-2 text-sm text-zinc-200 border border-zinc-700 rounded-full"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20px"
						viewBox="0 -960 960 960"
						width="20px"
						fill="#e8eaed"
					>
						<path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
					</svg>
					Add to playlist
				</button>
			)}
		</section>
	);
}