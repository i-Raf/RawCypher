"use client";

import { createContext, useContext, useState } from "react";

interface SideBarContextValue {
	isSideBarOpen: boolean;
	setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBarContext = createContext<SideBarContextValue | undefined>(
	undefined
);

export const SideBarProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

	return (
		<SideBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
			{children}
		</SideBarContext.Provider>
	);
};

export const useSideBarContext = () => {
	const sidebarContext = useContext(SideBarContext);
	if (sidebarContext === undefined) {
		throw new Error("useSideBarContext must be inside a SideBarProvider");
	}
	return sidebarContext;
};
