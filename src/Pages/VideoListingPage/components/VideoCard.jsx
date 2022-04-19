import { AddToPlaylistIcon, WatchLaterIcon } from '../../../Assets/svg/AllSVG.jsx';
const VideoCard = ({ video, cardClass = '', watchLaterClass = '', playListClass = '', index }) => {
	const getDelayedAnimation = (index) => {
		const baseDelay = 40,
			delayMultiplier = 80;
		return baseDelay + index * delayMultiplier;
	};
	const { _id, title, creator, categoryName } = video;
	return (
		<div style={{ animationDelay: `${getDelayedAnimation(index)}ms` }} className={`video-card ${cardClass}`}>
			<img src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} />
			<div className={`video-card-watch-later ${watchLaterClass}`}>
				<WatchLaterIcon />
			</div>
			<div className={`video-card-add-to-playlist ${playListClass}`}>
				<AddToPlaylistIcon />
			</div>
			<h5 title={title} className='video-card-title'>
				{title}
			</h5>
			<div className='flex-row space-between'>
				<div className='video-card-creator'>by:{creator}</div>
				<div className='video-card-podcast'>{categoryName}</div>
			</div>
		</div>
	);
};

export { VideoCard };
