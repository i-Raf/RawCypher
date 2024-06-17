"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useSideBarContext } from "@/app/context/SideBarProvider";

import Search from "./Search";
import MobileMenu from "./MobileMenu";
import { MenuIcon } from "../icons";

export default function Header() {
	const { isSideBarOpen, setIsSideBarOpen } = useSideBarContext();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	const closeMenu = () => setIsMobileMenuOpen(false);

	return (
		<div>
			<header className="fixed left-0 top-0 px-4 w-full h-16 flex justify-between items-center gap-y-4 bg-zinc-950 z-50">
				<div className="flex items-center gap-x-6">
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						title="menu button"
						className="lg:hidden"
					>
						<MenuIcon />
					</button>

					<button
						onClick={() => setIsSideBarOpen(!isSideBarOpen)}
						className="hidden lg:block"
						title="sidebar button"
					>
						<MenuIcon />
					</button>

					<Link href={"/"} className="w-fit flex items-center gap-x-2">
						<Image
							src={"/logo.webp"}
							alt="rawcypher logo"
							width={35}
							height={35}
						/>
						<h1 className="text-zinc-200">RawCypher</h1>
					</Link>
				</div>

				<Search />
			</header>

			{/* mobile menu */}
			{isMobileMenuOpen && <MobileMenu closeMenu={closeMenu} />}
		</div>
	);
}
