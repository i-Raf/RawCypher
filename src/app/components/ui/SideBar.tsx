"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSideBarContext } from "@/app/context/SideBarProvider";

import { HomeIcon, PlaylistIcon } from "../icons";

const sideBarLinks = [
	{
		title: "Home",
		url: "/",
		icon: <HomeIcon height="24px" width="24px" color="white" />,
	},
	{
		title: "Playlists",
		url: "/playlists",
		icon: <PlaylistIcon height="24px" width="24px" color="white" />,
	},
];

export default function SideBar() {
	const pathname = usePathname();
	const isVideoPage = pathname.includes("/video");
	const { isSideBarOpen, setIsSideBarOpen } = useSideBarContext();

	return (
		<>
			<nav
				id="sidebar"
				className={`hidden lg:pt-16 lg:px-4 lg:block ${
					isVideoPage ? "lg:fixed " : "lg:sticky "
				} lg:left-0 lg:top-0 lg:h-screen lg:bg-zinc-950 lg:z-40`}
			>
				<div id="sidebar-menu">
					<ul className="pb-2 w-full flex flex-col gap-y-2 text-zinc-200 overflow-hidden">
						{sideBarLinks.map((link) => (
							<li
								onClick={() => setIsSideBarOpen(false)}
								key={link.title}
								className={`p-2 flex ${
									isSideBarOpen
										? "w-[12rem] justify-start items-start"
										: "w-16 items-center justify-center"
								} hover:bg-zinc-800 rounded-md`}
							>
								<Link
									href={link.url}
									className={`w-fit flex items-center justify-center ${
										isSideBarOpen ? "flex gap-x-4" : "flex-col"
									} `}
								>
									{link.icon}
									<p className={`${isSideBarOpen ? "text-sm" : "text-xs"}`}>
										{link.title}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>

			{/* mask */}
			{isVideoPage && isSideBarOpen && (
				<div
					onClick={() => setIsSideBarOpen(false)}
					id="sidebar-mask"
					className={`fixed left-0 top-0 h-screen w-full bg-black bg-opacity-40 z-30`}
				></div>
			)}
		</>
	);
}
