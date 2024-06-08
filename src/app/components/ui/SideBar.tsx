import Link from "next/link";

import {
	HomeIcon,
	AboutIcon,
	ContactIcon,
	DonateIcon,
	HistoryIcon,
	WalletIcon,
	SettingsIcon,
} from "../icons";
import { PlaylistIcon } from "../icons/PlaylistIcon";

export default function SideBar() {
	return (
		<>
			<nav
				id="sidebar"
				className="hidden fixed left-0 top-0 py-4 px-2 h-screen w-2/4 z-40 bg-black lg:block lg:w-14"
			>
				<div id="sidebar-menu">
					<ul className="pb-2 w-full flex flex-col gap-y-2 text-zinc-200 border-b border-zinc-700 overflow-hidden">
						<li className="pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md">
							<Link href={"/"} className="w-full flex items-center gap-x-6">
								<HomeIcon />
								<p>Home</p>
							</Link>
						</li>

						<li className="pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md">
							<Link
								href={"/playlists"}
								className="w-full flex  items-center gap-x-6"
							>
								<PlaylistIcon />
								<p>Playlists</p>
							</Link>
						</li>

						<li className="pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md">
							<Link href={"/"} className="w-full flex  items-center gap-x-6">
								<HistoryIcon />
								<p>History</p>
							</Link>
						</li>

						<li className="pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md">
							<Link href={"/"} className="w-full flex items-center gap-x-6">
								<WalletIcon />
								<p>Wallet</p>
							</Link>
						</li>
					</ul>

					<ul className="py-2 w-full flex flex-col gap-y-2 text-zinc-200 border-b border-zinc-700 overflow-hidden">
						<li className="pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md">
							<Link href={"/"} className="w-full flex items-center gap-x-6">
								<SettingsIcon />
								<p>Settings</p>
							</Link>
						</li>

						<li className="pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md">
							<Link href={"/"} className="w-full flex  items-center gap-x-6">
								<ContactIcon />
								<p>Contact us</p>
							</Link>
						</li>
					</ul>

					{/* Other links */}
					<ul className="py-2 w-full flex flex-col gap-y-2 text-zinc-200 border-b border-zinc-700 overflow-hidden">
						<li className="pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md">
							<Link href={"/"} className="w-full flex items-center gap-x-6">
								<DonateIcon />
								<p>Donate</p>
							</Link>
						</li>

						<li className="pl-2 py-2 w-[13.2rem] hover:bg-zinc-800 rounded-md">
							<Link href={"/"} className="w-full flex items-center gap-x-6">
								<AboutIcon />
								<p>About</p>
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			{/* mask */}
			<div
				id="sidebar-mask"
				className={`hidden fixed left-0 top-0 h-screen w-full bg-black bg-opacity-40 z-30`}
			></div>
		</>
	);
}
