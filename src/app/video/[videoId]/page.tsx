import { Video, VideoListResponse } from '@/app/types';

import VideoPlayer from '@/app/components/ui/VideoPlayer';
import InteractionsBar from '@/app/components/ui/InteractionsBar';
import VideoInfo from '@/app/components/ui/VideoInfo';

async function getVideo(id: string) {
	const res = await fetch(
		`https://www.googleapis.com/youtube/v3/videos?&key=AIzaSyBeimpcogwB9SHkIhrfSdxkzLc27EKLFgc&id=${id}&part=snippet,statistics`
	);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Page({
	params,
}: {
	params: { videoId: string };
}) {
	const response: VideoListResponse = await getVideo(params.videoId);
	const video: Video = response.items[0];

	if (!video) return <>Not available</>;

	return (
		<main className='pt-16 w-full min-h-screen flex flex-col md:px-8 lg:pl-14 lg:px-6 lg:flex-row lg:gap-x-6 xl:px-16 2xl:px-24'>
			{/* first column */}
			<div className='min-h-screen lg:w-4/5'>
				{/* video */}
				<section className='w-full'>
					<VideoPlayer videoId={params.videoId} />

					<VideoInfo
						title={video.snippet.title}
						description={video.snippet.description}
						viewCount={video.statistics.viewCount}
					/>
				</section>

				<InteractionsBar
					likes={video.statistics.likeCount}
					videoId={params.videoId}
				/>

				{/* comments */}
				<div className='px-4 w-full h-48 lg:px-0'>
					<h3 className='mb-2 text-white'>Comments</h3>
					<div className='w-full flex items-center justify-center gap-x-2 bg-zinc-900 h-24 text-zinc-200 rounded-xl'>
						Write or read comments
						<a
							href={`https://voize.me/url/https%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253D${params.videoId}`}
							target='_blank'
							className='px-4 py-1 bg-zinc-800 flex-none flex items-center gap-x-2 rounded-full text-zinc-200 text-sm hover:bg-zinc-600'
						>
							<img
								className='w-6 h-6'
								src='https://www.rawcypher.com/voize-logo.svg'
								alt=''
							/>
							on Voize
						</a>
					</div>
				</div>
			</div>

			{/* second column */}
			<div className='lg:w-1/5 xl:w-1/4'>
				{/* playlist */}
				<section className='px-4'>
					<h3 className='mb-2 text-lg text-white'>Playlist</h3>

					{/* playlist container */}
					<div className='p-4 border border-zinc-800 rounded-xl'>
						{/* video */}
						<div className='flex w-full gap-x-2'>
							{/* thumbnail */}
							<div
								style={{
									backgroundImage: `url("${video.snippet.thumbnails.high.url}")`,
								}}
								className='h-28 w-44 bg-slate-500 bg-cover bg-center bg-no-repeat rounded-lg'
							></div>

							{/* video info */}
							<div>
								<p className='text-white'>video title</p>
							</div>
						</div>
					</div>
				</section>

				{/* recommended */}
			</div>
		</main>
	);
}
