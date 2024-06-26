import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import { RewardProvider } from "./context/RewardProvider";
import { SideBarProvider } from "./context/SideBarProvider";
import Header from "./components/ui/Header";
import SideBar from "./components/ui/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "RawCypher",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="w-full bg-zinc-950">
			<body className={`relative w-full ${inter.className} flex flex-col`}>
				<SideBarProvider>
					{/* <RewardProvider> */}
					<Header />

					<div className="w-full flex">
						<SideBar />
						{children}
					</div>
					{/* </RewardProvider> */}
				</SideBarProvider>
			</body>
		</html>
	);
}
