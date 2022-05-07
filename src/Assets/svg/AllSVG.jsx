function SunIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 16 16' {...props}>
			<g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5'>
				<circle cx='8' cy='8' r='3.25'></circle>
				<path d='m2.75 13.25l.5-.5m9.5 0l.5.5m-.5-10l.5-.5m-10 .5l-.5-.5M2.25 8h-1m13.5 0h-1M8 13.75v1m0-13.5v1'></path>
			</g>
		</svg>
	);
}

function HalfMoonIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 20 20' {...props}>
			<path
				fill='currentColor'
				d='M17.39 15.14A7.33 7.33 0 0 1 11.75 1.6c.23-.11.56-.23.79-.34a8.19 8.19 0 0 0-5.41.45a9 9 0 1 0 7 16.58a8.42 8.42 0 0 0 4.29-3.84a5.3 5.3 0 0 1-1.03.69z'
			></path>
		</svg>
	);
}

function AddToPlaylistIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path fill='currentColor' d='M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z'></path>
		</svg>
	);
}

function WatchLaterIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10C6.47 22 2 17.5 2 12S6.5 2 12 2m.5 11H11V7h1.5v4.26l3.7-2.13l.75 1.3L12.5 13Z'
			></path>
		</svg>
	);
}

function FilledWatchLaterIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm4.2 12.2L11 13V7h1.5v5.2l4.5 2.7l-.8 1.3z'
				opacity='.3'
			></path>
			<path
				fill='currentColor'
				d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z'
			></path>
		</svg>
	);
}

function ExpandMoreIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path fill='currentColor' d='M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6l-1.41-1.41z'></path>
		</svg>
	);
}

function ExpandLessIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path fill='currentColor' d='m12 8l-6 6l1.41 1.41L12 10.83l4.59 4.58L18 14z'></path>
		</svg>
	);
}

function ShowPasswordEyeIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z'
			></path>
		</svg>
	);
}

function HidePasswordEyeIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z'
			></path>
		</svg>
	);
}

function VideoWithTVIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path fill='currentColor' d='M3 17h18V5H3v12zM9 7l7 4l-7 4V7z' opacity='.3'></path>
			<path
				fill='currentColor'
				d='M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z'
			></path>
		</svg>
	);
}

function LikeFilledIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path
				d='M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z'
				fill='currentColor'
			></path>
		</svg>
	);
}

function LikeIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z'
			></path>
		</svg>
	);
}
function DeleteIcon(props) {
	return (
		<svg width='25' height='25' viewBox='0 0 24 24' {...props}>
			<path fill='currentColor' d='M8 9h8v10H8z' opacity='.3'></path>
			<path fill='currentColor' d='m15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z'></path>
		</svg>
	);
}

export {
	SunIcon,
	HalfMoonIcon,
	AddToPlaylistIcon,
	WatchLaterIcon,
	FilledWatchLaterIcon,
	ExpandMoreIcon,
	ExpandLessIcon,
	ShowPasswordEyeIcon,
	HidePasswordEyeIcon,
	VideoWithTVIcon,
	LikeFilledIcon,
	LikeIcon,
	DeleteIcon,
};
