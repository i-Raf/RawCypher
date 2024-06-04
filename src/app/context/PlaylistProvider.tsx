"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { PlaylistVideo } from "../types";
import { getFromLocalStorage } from "../utils";

interface PlaylistContextValue {
	playlist: PlaylistVideo[];
	setPlaylist: React.Dispatch<React.SetStateAction<PlaylistVideo[]>>;
	isLoading: boolean;
}

export const PlaylistContext = createContext<PlaylistContextValue | undefined>(
	undefined
);

export const PlaylistProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [playlist, setPlaylist] = useState<PlaylistVideo[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		let savedPlaylist = getFromLocalStorage("playlist");
		setIsLoading(false);
		setPlaylist(savedPlaylist);
	}, []);

	return (
		<PlaylistContext.Provider value={{ isLoading, playlist, setPlaylist }}>
			{children}
		</PlaylistContext.Provider>
	);
};

export const usePlaylistContext = () => {
	const playlistContext = useContext(PlaylistContext);
	if (playlistContext === undefined) {
		throw new Error("usePlaylistContext must be inside a PlaylistProvider");
	}
	return playlistContext;
};
