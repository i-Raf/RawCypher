'use client';

import { useState } from 'react';
import { ShareIcon } from '../icons';

type Props = {
	videoId: string;
};

export default function ShareButton({ videoId }: Props) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<>
			<button
				title='share video'
				onClick={() => setIsModalOpen(true)}
				className='px-4 py-1 bg-zinc-800 flex-none rounded-full hover:bg-zinc-600'
			>
				<ShareIcon color='white' height='20' width='20' />
			</button>

			{/* mask */}
			{isModalOpen && (
				<div
					onClick={() => setIsModalOpen(false)}
					className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 z-10'
				></div>
			)}

			{/* share modal */}
			{isModalOpen && (
				<div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-xl bg-zinc-800 z-20'>
					<div className='mb-6 flex items-center justify-between'>
						<h3 className='text-white text-lg'>Share</h3>

						<button
							onClick={() => setIsModalOpen(false)}
							className='text-zinc-200 text-center'
						>
							X
						</button>
					</div>

					<div className='mb-12 flex items-center gap-x-4'>
						{/* whatsapp share */}

						<a className=' flex flex-col gap-y-2 text-center'>
							<div className='w-16 h-16 rounded-full bg-white'></div>
							<p className='text-zinc-200 text-sm'>WhatsApp</p>
						</a>

						<a
							href={`https://t.me/share/url?url=${encodeURIComponent(
								'https://www.youtube.com/watch?v=' + videoId
							)}&text={text}`}
							className=' flex flex-col gap-y-2 text-center'
						>
							<div className='w-16 h-16 rounded-full bg-white'></div>
							<p className='text-zinc-200 text-sm'>Telegram</p>
						</a>

						<div className=' flex flex-col gap-y-2 text-center'>
							<div className='w-16 h-16 rounded-full bg-white'></div>
							<p className='text-zinc-200 text-sm'>Facebook</p>
						</div>

						<div className=' flex flex-col gap-y-2 text-center'>
							<div className='w-16 h-16 rounded-full bg-white'></div>
							<p className='text-zinc-200 text-sm'>X</p>
						</div>
					</div>

					<div className='py-2 px-4 bg-black rounded-xl border border-zinc-600 flex items-center justify-between'>
						<p className='max-w-48 text-zinc-200 truncate'>{`https://www.youtube.com/watch?v=${videoId}`}</p>

						<button className='px-4 py-2 rounded-full text-sm bg-blue-500'>
							Copy
						</button>
					</div>
				</div>
			)}
		</>
	);
}
