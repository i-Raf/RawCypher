export interface IconProps {
	color?: string;
	width: string;
	height: string;
}

export interface Video {
	kind: string;
	etag: string;
	id: string;
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: {
				url: string;
				width: number;
				height: number;
			};
			medium: {
				url: string;
				width: number;
				height: number;
			};
			high: {
				url: string;
				width: number;
				height: number;
			};
			standard?: {
				url: string;
				width: number;
				height: number;
			};
			maxres?: {
				url: string;
				width: number;
				height: number;
			};
		};
		channelTitle: string;
		tags: string[];
		categoryId: string;
		liveBroadcastContent: string;
		defaultLanguage: string;
		localized: {
			title: string;
			description: string;
		};
		defaultAudioLanguage: string;
	};
	statistics: {
		viewCount: string;
		likeCount: string;
		favoriteCount: string;
		commentCount: string;
	};
}

export interface VideoListResponse {
	kind: string;
	etag: string;
	items: Video[];
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
}

export interface SearchVideoListResponse {
	kind: string;
	etag: string;
	items: SearchVideoResult[];
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
}

export interface SearchVideoResult {
	kind: string;
	etag: string;
	id: { kind: string; videoId: string };
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: {
				url: string;
				width: number;
				height: number;
			};
			medium: {
				url: string;
				width: number;
				height: number;
			};
			high: {
				url: string;
				width: number;
				height: number;
			};
		};
		channelTitle: string;
		liveBroadcastContent: string;
		publishTime: string;
	};
}

export interface PlaylistVideo {
	order: number;
	videoId: string;
	title: string;
	thumbnail: string;
}
