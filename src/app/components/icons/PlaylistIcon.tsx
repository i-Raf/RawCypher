interface Props {
	height: string;
	width: string;
	color: string;
}

export function PlaylistIcon({ height, width, color }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={height}
			viewBox="0 -960 960 960"
			width={width}
			fill={color}
		>
			<path d="M120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Zm520 520v-320l240 160-240 160Z" />
		</svg>
	);
}
