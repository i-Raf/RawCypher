import Link from 'next/link';

interface VideoCardProps {
	videoId: string;
	title: string;
	thumbnail: string;
}

export default function VideoCard({
	videoId,
	title,
	thumbnail,
}: VideoCardProps) {
	return (
		<Link
			href={`/video/${videoId}`}
			className='w-full h-fit flex-none cursor-pointer col-span-1 md:col-span-2'
		>
			{/* thumbnail */}
			<div
				style={{
					backgroundImage: `url("${thumbnail}")`,
				}}
				className='w-full h-56 bg-slate-500 bg-cover bg-center bg-no-repeat md:rounded-xl md:h-48 lg:h-44 xl:h-48'
			></div>

			{/* text content */}
			<div className='px-4 py-2 w-full flex flex-col gap-y-1 text-wrap md:px-0'>
				<h3 className='text-sm max-2-ellipsis text-zinc-200 md:text-base'>
					{title}
				</h3>
				<p className='text-zinc-400 text-xs'>
					<span>121</span> views * <span>4</span> hours ago
				</p>
			</div>
		</Link>
	);
}
