"use client";

import { useState } from "react";

import { getFromLocalStorage } from "@/app/utils";
import { IPlaylist, PlaylistVideo } from "@/app/types";

import { CloseIcon } from "../icons";
import Checkbox from "./Checkbox";

interface Props {
	video: PlaylistVideo;
	closeModal: () => void;
}

export default function AddToPlaylistModal({ video, closeModal }: Props) {
	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
	const [playlistName, setPlaylistName] = useState<string>("");
	const savedPlaylists: IPlaylist[] = getFromLocalStorage("playlists");
	const [playlists, setPlaylists] = useState<IPlaylist[]>(savedPlaylists || []);

	function onSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		if (playlists.some((p) => p.name === playlistName)) {
			alert(`Playlist "${playlistName}" already exists.`);
			setPlaylistName("");
			return;
		}
		setPlaylists([...playlists, { name: playlistName, playlist: [video] }]);
		setPlaylistName("");
		localStorage.setItem(
			"playlists",
			JSON.stringify([...playlists, { name: playlistName, playlist: [video] }])
		);
		alert("Playlist created and video added");

		closeModal();
	}

	function addVideoToPlaylist(playlistName: string) {
		// find playlist with the same name as the one the user selected and add the video to it
		let updatedPlaylists = savedPlaylists.map((p) => {
			if (p.name === playlistName) {
				p.playlist.push(video);
			}
			return p;
		});
		localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
		setPlaylists(updatedPlaylists);
	}

	function removeVideoFromPlaylist(playlistName: string, videoId: string) {
		// find playlist with the same name as the one the user selected and remove the video from it
		let updatedPlaylists = savedPlaylists.map((p) => {
			if (p.name === playlistName) {
				p.playlist = p.playlist.filter((video) => video.videoId !== videoId);
			}
			return p;
		});

		localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
		setPlaylists(updatedPlaylists);
	}

	return (
		<>
			{/* modal mask */}
			<div
				onClick={closeModal}
				className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-40 z-50"
			></div>
			<div
				style={{
					zIndex: 99,
				}}
				className="p-6 flex flex-col gap-y-4 text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl bg-zinc-800"
			>
				<div className="flex items-center justify-between">
					<p>Save video to...</p>
					<button title="close modal" onClick={closeModal}>
						<CloseIcon width="25px" height="25px" color="white" />
					</button>
				</div>

				<div className="flex flex-col items-start gap-2">
					{playlists.map((playlist, index) => (
						<Checkbox
							key={index}
							index={index}
							label={playlist.name}
							value={playlist.name}
							videoId={video.videoId}
							removeVideoFromPlaylist={removeVideoFromPlaylist}
							addVideoToPlaylist={addVideoToPlaylist}
						/>
					))}
				</div>

				{!isFormOpen && (
					<button onClick={() => setIsFormOpen(true)}>
						+ Create new playlist
					</button>
				)}

				{isFormOpen && (
					<form
						onSubmit={(e) => onSubmit(e)}
						className="flex flex-col items-start"
					>
						<label htmlFor="" className="mb-1 text-sm text-zinc-200">
							Name
						</label>
						<input
							value={playlistName}
							onChange={(e: React.FormEvent<HTMLInputElement>) =>
								setPlaylistName(e.currentTarget.value)
							}
							type="text"
							className="mb-4 pb-1.5 text-sm pl-2 bg-transparent outline-none border-b-2 border-white"
							placeholder="Enter playlist title..."
						/>
						<input
							type="submit"
							className="self-end text-sm text-blue-400 font-semibold"
							value="Create"
						/>
					</form>
				)}
			</div>
		</>
	);
}
