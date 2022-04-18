import { AddToPlaylistIcon, WatchLaterIcon } from '../../../Assets/svg/AllSVG.jsx';
const VideoCard = ({ video, cardClass = '', watchLaterClass = '', playListClass = '', index = 1 }) => {
	const { _id, title, creator, categoryName } = video;
	return (
		<div style={{ animationDuration: `${400 + index * 30 > 1000 ? 1000 : 400 + index * 50}ms` }} className={`video-card ${cardClass}`}>
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
