import Link from 'next/link';

import {
	HomeIcon,
	HistoryIcon,
	WalletIcon,
	ContactIcon,
	SettingsIcon,
	AboutIcon,
	DonateIcon,
} from '../icons';

interface MobileMenuProps {
	closeMenu: () => void;
}

export default function MobileMenu({ closeMenu }: MobileMenuProps) {
	return (
		<>
			{/* mask */}
			<div
				onClick={closeMenu}
				className={`fixed left-0 top-0 h-screen w-full bg-black bg-opacity-40 z-30`}
			></div>

			<div
				className='fixed left-0 top-0 h-screen py-4 px-2 w-2/4 z-40 bg-black md:w-56'
				onClick={closeMenu}
			>
				<ul className='pb-2 w-full flex flex-col gap-y-2 text-zinc-200 border-b border-zinc-700 overflow-hidden'>
					<li className='pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md'>
						<Link href={'/'} className='w-full flex items-center gap-x-6'>
							<HomeIcon />
							<p>Home</p>
						</Link>
					</li>

					<li className='pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md'>
						<Link href={'/'} className='w-full flex  items-center gap-x-6'>
							<HistoryIcon />
							<p>History</p>
						</Link>
					</li>

					<li className='pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md'>
						<Link href={'/'} className='w-full flex items-center gap-x-6'>
							<WalletIcon />
							<p>Wallet</p>
						</Link>
					</li>
				</ul>

				<ul className='py-2 w-full flex flex-col gap-y-2 text-zinc-200 border-b border-zinc-700 overflow-hidden'>
					<li className='pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md'>
						<Link href={'/'} className='w-full flex items-center gap-x-6'>
							<SettingsIcon />
							<p>Settings</p>
						</Link>
					</li>

					<li className='pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md'>
						<Link href={'/'} className='w-full flex  items-center gap-x-6'>
							<ContactIcon />
							<p>Contact us</p>
						</Link>
					</li>
				</ul>

				{/* Other links */}
				<ul className='py-2 w-full flex flex-col gap-y-2 text-zinc-200 border-b border-zinc-700 overflow-hidden'>
					<li className='pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md'>
						<Link href={'/'} className='w-full flex items-center gap-x-6'>
							<DonateIcon />
							<p>Donate</p>
						</Link>
					</li>

					<li className='pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md'>
						<Link href={'/'} className='w-full flex items-center gap-x-6'>
							<AboutIcon />
							<p>About</p>
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
