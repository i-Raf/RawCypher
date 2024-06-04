import VideoCard from "./VideoCard";

import { VideoListResponse } from "@/app/types";

let baseUrl =
	"https://www.googleapis.com/youtube/v3/videos?&key=AIzaSyBeimpcogwB9SHkIhrfSdxkzLc27EKLFgc&chart=mostPopular&part=snippet";

async function getData() {
	const res = await fetch(baseUrl);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function MostPopularVideos() {
	const response: VideoListResponse = await getData();
	const popularVideos = response.items;

	return (
		<section className="w-full flex flex-col">
			<div className="mb-4 px-4 md:px-0">
				<h3 className="text-lg text-zinc-200 font-semibold">Trending videos</h3>
				<p className="text-zinc-400 text-sm">
					Most popular videos at the moment
				</p>
			</div>

			<div className="mx-auto w-full grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-x-4 lg:gap-y-10 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
				{popularVideos.map((item) => (
					<VideoCard
						key={item.id}
						title={item.snippet.title}
						thumbnail={item.snippet.thumbnails.high.url}
						videoId={item.id}
					/>
				))}
			</div>
		</section>
	);
}
