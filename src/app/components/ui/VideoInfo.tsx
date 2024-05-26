'use client';

import { useState } from 'react';

interface Props {
	title: string;
	description: string;
	viewCount: string;
}

export default function VideoInfo({ title, description, viewCount }: Props) {
	const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

	return (
		<div className='mb-4 px-4 py-2 md:px-0'>
			{/* video title */}
			<h2 className='mb-4 text-zinc-200 max-2-ellipsis xl:text-xl xl:font-semibold'>
				{title}
			</h2>

			{/* video description */}
			<div className='px-3 py-2 rounded-xl bg-zinc-800'>
				<p className='text-white text-sm font-semibold'>
					{Number(viewCount).toLocaleString()} views
				</p>

				<div className='w-full'>
					<p
						className={`text-zinc-200 text-sm text-pretty break-words ${
							!isDescriptionOpen && 'max-2-ellipsis'
						}`}
					>
						{description}
					</p>

					<button
						title='show full description'
						className='mt-2 text-blue-500 text-sm'
						onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
					>
						{isDescriptionOpen ? 'Show Less' : 'Show More'}
					</button>
				</div>
			</div>
		</div>
	);
}
