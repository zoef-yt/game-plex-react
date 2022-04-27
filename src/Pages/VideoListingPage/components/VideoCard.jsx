import { useNavigate } from 'react-router-dom';
import { AddToPlaylistIcon, DeleteIcon, FilledWatchLaterIcon, WatchLaterIcon } from '../../../Assets/svg/AllSVG.jsx';
import { useAuth, useHistory, useModal, usePlaylist, useWatchLater } from '../../../Context/index.js';
import '../VideoListingPage.css';
const VideoCard = ({ video, cardClass = '', watchLaterClass = '', playListClass = '', index, canDelete = false, deleteOnClick }) => {
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
	const navigate = useNavigate();

	const { watchLaterList, addToWatchLater, removeFromWatchLater } = useWatchLater();
	const isVideoInWatchLater = watchLaterList?.findIndex((vid) => vid._id === _id) === -1 ? false : true;

	const { addVideoToHistory, historyList } = useHistory();
	const isInHistory = historyList.findIndex((vid) => vid._id === video._id) === -1 ? false : true;

	const videoOpenHandler = (_id, vid) => {
		!isInHistory ? addVideoToHistory(vid) : null;
		navigate(`/videos/${_id}`);
	};

	const addToWatchLaterHandler = (vid) => {
		user ? (isVideoInWatchLater ? removeFromWatchLater(vid._id) : addToWatchLater(vid)) : openModal('AuthModal');
	};

	const { selectCurrentVideo } = usePlaylist();
	const addToPlaylistHandler = (vid) => {
		user ? (openModal('PlaylistModal'), selectCurrentVideo(vid)) : openModal('AuthModal');
	};

	return (
		<div style={{ animationDelay: `${getDelayedAnimation(index)}ms` }} className={`video-card not-selectable ${cardClass}`}>
			<img className='not-selectable ' onClick={() => videoOpenHandler(_id, video)} src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} />
			<div
				onClick={() => addToWatchLaterHandler(video)}
				className={`video-card-watch-later ${watchLaterClass} ${isVideoInWatchLater && 'video-card-in-watch-later'}`}
			>
				{isVideoInWatchLater ? <FilledWatchLaterIcon /> : <WatchLaterIcon />}
			</div>
			<div onClick={() => addToPlaylistHandler(video)} className={`video-card-add-to-playlist ${playListClass}`}>
				<AddToPlaylistIcon />
			</div>

			{canDelete && (
				<div onClick={deleteOnClick} className={'video-card-delete-button'}>
					<DeleteIcon />
				</div>
			)}
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
