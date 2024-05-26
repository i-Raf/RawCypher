import Link from 'next/link';

import Ads from './components/ui/Ads';
import VideoCard from './components/ui/VideoCard';
import MostPopularVideos from './components/ui/MostPopularVideos';

export default async function Home() {
	return (
		// left margin on main element must be equal or more than sidebar's width
		// top padding on main element must be equal to headers' height
		<main className='pb-10 pt-16 w-full min-h-screen flex flex-col gap-y-10 items-start md:px-4 lg:pl-16'>
			<Ads />

			{/* trending videos */}
			<MostPopularVideos />

			{/* featured videos */}
			<section className='px-4 w-full flex flex-col items-start md:px-0'>
				<div className='mb-4'>
					<h3 className='text-lg text-zinc-200 font-semibold'>
						Featured videos
					</h3>
					<p className='text-zinc-400 text-sm'>
						Support Rawcypher by watching any video below
					</p>
				</div>

				<div className='w-full h-auto flex items-start gap-x-4 overflow-x-auto lg:gap-x-6'>
					<Link
						href={`/`}
						className='h-[36rem] w-[18rem] flex-none cursor-pointer'
					>
						{/* thumbnail */}
						<div className='h-[80%] w-full bg-slate-500 rounded-xl bg-zinc-800 md:rounded-xl'></div>

						{/* text content */}
						<div className='py-2 text-wrap'>
							<h3 className='mb-1 max-2-ellipsis text-zinc-200'>
								How to use MEV bot and make 1ETH in 12 hours
							</h3>
							<p className='text-zinc-400 text-sm'>
								<span>121</span> views * <span>4</span> hours ago
							</p>
						</div>
					</Link>

					<Link
						href={`/`}
						className='h-[36rem] w-[18rem] flex-none cursor-pointer'
					>
						{/* thumbnail */}
						<div className='h-[80%] w-full bg-slate-500 rounded-xl bg-zinc-800 md:rounded-xl'></div>

						{/* text content */}
						<div className='py-2 text-wrap'>
							<h3 className='mb-1 max-2-ellipsis text-zinc-200'>
								How to use MEV bot and make 1ETH in 12 hours
							</h3>
							<p className='text-zinc-400 text-sm'>
								<span>121</span> views * <span>4</span> hours ago
							</p>
						</div>
					</Link>

					<Link
						href={`/`}
						className='h-[36rem] w-[18rem] flex-none cursor-pointer'
					>
						{/* thumbnail */}
						<div className='h-[80%] w-full bg-slate-500 rounded-xl bg-zinc-800 md:rounded-xl'></div>

						{/* text content */}
						<div className='py-2 text-wrap'>
							<h3 className='mb-1 max-2-ellipsis text-zinc-200'>
								How to use MEV bot and make 1ETH in 12 hours
							</h3>
							<p className='text-zinc-400 text-sm'>
								<span>121</span> views * <span>4</span> hours ago
							</p>
						</div>
					</Link>
				</div>
			</section>

			{/* explore videos 2nd part */}
			<section className='w-full flex flex-col'>
				<div className='mb-4 px-4 md:px-0'>
					<h3 className='text-lg text-zinc-200 font-semibold'>
						Keep exploring
					</h3>
					<p className='text-zinc-400 text-sm'>See if you like something</p>
				</div>

				<div className='w-full flex flex-col items-center gap-y-4 md:flex-row md:flex-wrap md:items-start md:gap-x-4'></div>
			</section>
		</main>
	);
}
