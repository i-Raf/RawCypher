import Link from 'next/link';

export interface SearchVideoCardProps {
	videoId: string;
	title: string;
	thumbnail: string;
	description: string;
}

export default function SearchResultVideoCard({
	videoId,
	thumbnail,
	title,
	description,
}: SearchVideoCardProps) {
	return (
		<Link
			href={`/video/${videoId}`}
			className='w-full h-fit cursor-pointer md:w-3/4 lg:w-full lg:flex lg:gap-x-4'
		>
			{/* thumbnail */}
			<div
				style={{
					backgroundImage: `url("${thumbnail}")`,
				}}
				className='bg-slate-500 w-full h-56 bg-cover bg-center bg-no-repeat md:rounded-xl lg:min-w-[25rem] xl:w-[32rem] xl:h-[17rem]'
			></div>

			{/* text content */}
			<div className='px-4 py-2 w-full max-w-[40rem] flex flex-col gap-y-2 text-wrap md:px-0 lg:py-0'>
				<h3 className='max-2-ellipsis text-zinc-200 xl:text-lg'>{title}</h3>
				<p className='text-zinc-400 text-sm xl:text-xs'>
					<span>121</span> views * <span>4</span> hours ago
				</p>
				<div className='hidden md:block'>
					<p className='text-zinc-400 text-sm max-2-ellipsis xl:text-xs'>
						{description}
					</p>
				</div>
			</div>
		</Link>
	);
}
