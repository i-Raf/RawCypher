import { IconProps } from '@/app/types';

export function SearchIcon({ width, height }: IconProps) {
	return (
		<svg
			data-slot='icon'
			fill='none'
			strokeWidth='1.5'
			stroke='currentColor'
			viewBox='0 0 24 24'
			height={height}
			width={width}
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			className='text-zinc-200'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
			></path>
		</svg>
	);
}
