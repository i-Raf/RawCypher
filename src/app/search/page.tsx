import { SearchVideoListResponse } from '../types';

import SearchResultVideoCard from '../components/ui/SearchResultVideoCard';
import Ads from '../components/ui/Ads';

async function getData(searchTerm: string) {
	const res = await fetch(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchTerm}&type=video&key=AIzaSyBeimpcogwB9SHkIhrfSdxkzLc27EKLFgc`
	);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Page({ searchParams }: { searchParams: any }) {
	const response: SearchVideoListResponse = await getData(searchParams.q);
	const searchResults = response.items;

	return (
		<main className='mx-auto pt-16 py-6 w-full max-w-[1200px] min-h-screen flex flex-col gap-y-8 items-start lg:pl-14 xl:pl-0'>
			{/* ads - sponsors */}
			<Ads />
			<section className='mx-auto w-full flex flex-col items-center gap-y-8 md:px-8 lg:gap-y-4 2xl:px-0'>
				{searchResults.length > 0 || !searchResults ? (
					searchResults.map((result) => (
						<SearchResultVideoCard
							key={result.id.videoId}
							videoId={result.id.videoId}
							thumbnail={result.snippet.thumbnails.high.url}
							title={result.snippet.title}
							description={result.snippet.description}
						/>
					))
				) : (
					<div className='pt-16 text-white '>
						No results found for '{searchParams.q}'
					</div>
				)}
			</section>
		</main>
	);
}
