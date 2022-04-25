import { useNavigate } from 'react-router-dom';
import { AddToPlaylistIcon, FilledWatchLaterIcon, WatchLaterIcon } from '../../../Assets/svg/AllSVG.jsx';
import { useAuth, useModal, useWatchLater } from '../../../Context/index.js';
import '../VideoListingPage.css';
const VideoCard = ({ video, cardClass = '', watchLaterClass = '', playListClass = '', index }) => {
	const getDelayedAnimation = (index) => {
		const baseDelay = 20,
			delayMultiplier = 35,
			maxAnimationRange = 1500;
		return baseDelay + index * delayMultiplier > maxAnimationRange
			? index * delayMultiplier - delayMultiplier
			: baseDelay + index * delayMultiplier;
	};
	const { _id, title, creator, categoryName } = video;
	const { openModal } = useModal();
	const { user } = useAuth();
	const { watchLaterList, addToWatchLater, removeFromWatchLater } = useWatchLater();
	const isVideoInWatchLater = watchLaterList?.findIndex((vid) => vid._id === _id) === -1 ? false : true;
	const navigate = useNavigate();

	const videoOpenHandler = (_id) => {
		console.log('Onclick to open the video');
		navigate(`/videos/${_id}`);
	};

	const addToWatchLaterHandler = (vid) => {
		user ? (isVideoInWatchLater ? removeFromWatchLater(vid._id) : addToWatchLater(vid)) : openModal('AuthModal');
	};
	const addToPlaylistHandler = () => {
		//!TODO THIS CONSOLE LOG IS FOR FUTURE CODE.
		user ? console.log('adding to playlist') : openModal('AuthModal');
	};

	return (
		<div style={{ animationDelay: `${getDelayedAnimation(index)}ms` }} className={`video-card not-selectable ${cardClass}`}>
			<img className='not-selectable ' onClick={() => videoOpenHandler(_id)} src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} />
			<div
				onClick={() => addToWatchLaterHandler(video)}
				className={`video-card-watch-later ${watchLaterClass} ${isVideoInWatchLater && 'video-card-in-watch-later'}`}
			>
				{isVideoInWatchLater ? <FilledWatchLaterIcon /> : <WatchLaterIcon />}
			</div>
			<div onClick={addToPlaylistHandler} className={`video-card-add-to-playlist ${playListClass}`}>
				<AddToPlaylistIcon />
			</div>
			<p onClick={() => videoOpenHandler(_id)} title={title} className='video-card-title'>
				{title}
			</p>
			<div className='flex-row space-between'>
				<div className='video-card-creator'>by:{creator}</div>
				<div className='video-card-podcast'>{categoryName}</div>
			</div>
		</div>
	);
};

export { VideoCard };
