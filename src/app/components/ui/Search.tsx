'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { SearchIcon, LeftArrowIcon, CloseIcon } from '../icons';
import { getFromLocalStorage } from '@/app/utils';

export default function Search() {
	const router = useRouter();
	const [isInputOpen, setIsInputOpen] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [searchHistory, setSearchHistory] = useState<string[]>([]);
	const [isSearchHistoryOpen, setIsSearchHistoryOpen] =
		useState<boolean>(false);

	function handleSearch() {
		if (searchTerm && searchTerm.length > 0) {
			// check if it hasn't been saved yet
			if (!searchHistory.some((search) => search === searchTerm)) {
				// save to local storage
				setSearchHistory([...searchHistory, searchTerm]);
				localStorage.setItem(
					'search-history',
					JSON.stringify([...searchHistory, searchTerm])
				);
			}
			router.push(`/search?q=${searchTerm}`);
		}
		setIsInputOpen(false);
		setIsSearchHistoryOpen(false);
	}

	const handleKeyboardEvent = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') handleSearch();
	};

	function removeFromSearchHistory(item: string) {
		const filteredSearchHistory = searchHistory.filter(
			(search) => search != item
		);
		setSearchHistory(filteredSearchHistory);
		localStorage.setItem(
			'search-history',
			JSON.stringify(filteredSearchHistory)
		);
	}

	useEffect(() => {
		const savedSearchHistory = getFromLocalStorage('search-history');
		if (savedSearchHistory) {
			setSearchHistory(savedSearchHistory);
		}
	}, []);

	return (
		<>
			{/* mobile search */}
			{isInputOpen && (
				<div className='absolute left-0 top-0 w-full bg-zinc-900'>
					<div className='px-4 pt-4 pb-4 flex items-center justify-between gap-x-4'>
						<button title='close search' onClick={() => setIsInputOpen(false)}>
							<LeftArrowIcon />
						</button>

						<div className='w-full flex items-center gap-x-4 border rounded-full border-r border-zinc-800'>
							<input
								type='text'
								placeholder='Search'
								value={searchTerm}
								onKeyDown={handleKeyboardEvent}
								onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
									setSearchTerm(e.currentTarget.value)
								}
								className='pl-6 rounded-l-full h-10 w-full bg-zinc-950 text-sm outline-none text-zinc-300'
							/>

							<button onClick={handleSearch} title='search' className='pr-4'>
								<SearchIcon width='20' height='20' />
							</button>
						</div>
					</div>

					{/* mobile search history */}
					{searchHistory.length > 0 && (
						<div className=' w-full h-auto max-h-[15rem] overflow-y-auto'>
							<ul className='text-blue-400 text-sm '>
								{searchHistory.map((search) => (
									<li
										key={search}
										className='px-4 flex items-center justify-between border-b border-b-zinc-700'
									>
										<p
											onClick={() => {
												setSearchTerm(search);
												setIsInputOpen(false);
												router.push(`/search?q=${search}`);
											}}
											className='py-3 w-full'
										>
											{search}
										</p>

										<button onClick={() => removeFromSearchHistory(search)}>
											<CloseIcon color='#FC5656' width='22' height='22' />
										</button>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			)}
			<button
				title='search'
				className='md:hidden'
				onClick={() => setIsInputOpen(true)}
			>
				<SearchIcon width='25' height='25' />
			</button>

			{/* desktop search */}
			<div className='relative hidden w-fit flex items-center gap-x-4 rounded-full md:flex md:pr-4 lg:mx-auto md:border border-zinc-800 bg-zinc-950'>
				<div className='hidden pr-2 w-[20rem] h-10 items-center border-r border-zinc-800 md:flex lg:w-[25rem] xl:w-[30rem] 2xl:w-[35rem]'>
					<input
						type='text'
						placeholder='Search'
						value={searchTerm}
						onClick={() => {
							if (searchHistory.length > 0) {
								setIsSearchHistoryOpen(true);
							}
						}}
						onKeyDown={handleKeyboardEvent}
						onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
							setSearchTerm(e.currentTarget.value);
						}}
						className='pl-6 rounded-l-full h-full w-full bg-zinc-950 outline-none text-zinc-300'
					/>

					{isSearchHistoryOpen && (
						<button
							title='close history'
							onClick={() => setIsSearchHistoryOpen(false)}
						>
							<CloseIcon color='#D3D3D3' width='25' height='25' />
						</button>
					)}

					{/* desktop search history */}
					{isSearchHistoryOpen && searchHistory.length > 0 && (
						<>
							{/* mask */}
							<div
								onClick={() => setIsSearchHistoryOpen(false)}
								className='fixed top-16 left-0 h-screen w-full'
							></div>
							<ul className='absolute top-12 left-0 py-4 w-[20rem] max-h-[15rem] overflow-y-auto bg-zinc-900 rounded-xl text-white lg:w-[25rem] xl:w-[30rem] 2xl:w-[35rem]'>
								{searchHistory.map((search) => (
									<li
										key={search}
										className='px-4 py-1 flex items-center justify-between gap-x-4 hover:bg-zinc-800'
									>
										<div
											onClick={() => {
												setSearchTerm(search);
												setIsSearchHistoryOpen(false);
												router.push(`/search?q=${search}`);
											}}
											className='w-full flex items-center gap-x-4'
										>
											<SearchIcon color='white' width='20px' height='20px' />
											{search}
										</div>

										<button onClick={() => removeFromSearchHistory(search)}>
											<CloseIcon color='#FC5656' width='20' height='20' />
										</button>
									</li>
								))}
							</ul>
						</>
					)}
				</div>

				<button onClick={handleSearch} title='search'>
					<SearchIcon width='22' height='22' />
				</button>
			</div>
		</>
	);
}
