import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './SingleVideoPage.css';
import { useAuth, useLikes, useModal, usePlaylist, useVideo, useWatchLater } from '../../Context';
import { SuggestedVideos } from './SuggestedVideos';
import { VideoPlayer } from './VideoPlayer';
import { AddToPlaylistIcon, FilledWatchLaterIcon, LikeFilledIcon, LikeIcon, WatchLaterIcon } from '../../Assets/svg/AllSVG';
const SingleVideoPage = () => {
	const { id: videoURLId } = useParams();
	const { videos } = useVideo();
	const [currentVideoDetail, setCurrentVideoDetail] = useState('');
	useEffect(() => {
		const videoDetail = videos.find((video) => video._id === videoURLId);
		if (videoDetail) {
			setCurrentVideoDetail(videoDetail);
		}
		window.scrollTo(0, 0);
	}, [videoURLId, videos]);

	const randomlySortedVideos = [...videos].sort(() => Math.random() - 0.5);
	const { likesList, removeVideoFromLike, addVideoToLike } = useLikes();
	const { watchLaterList, addToWatchLater, removeFromWatchLater } = useWatchLater();
	const { user } = useAuth();
	const { openModal } = useModal();

	const isVideoInWatchLater = watchLaterList?.findIndex((vid) => vid._id === videoURLId) === -1 ? false : true;
	const addToWatchLaterHandler = (vid) => {
		user ? (isVideoInWatchLater ? removeFromWatchLater(vid._id) : addToWatchLater(vid)) : openModal('AuthModal');
	};

	const isVideoLiked = likesList?.findIndex((vid) => vid._id === videoURLId) === -1 ? false : true;
	const likeHandler = (vid) => {
		user ? (isVideoLiked ? removeVideoFromLike(vid._id) : addVideoToLike(vid)) : openModal('AuthModal');
	};
	const { selectCurrentVideo } = usePlaylist();
	const addToPlaylistHandler = (vid) => {
		user ? (openModal('PlaylistModal'), selectCurrentVideo(vid)) : openModal('AuthModal');
	};
	return (
		<div className='video-page-body'>
			<div className='video-section'>
				<VideoPlayer id={videoURLId} />
				{currentVideoDetail && (
					<>
						<div className='video-details flex-column'>
							<div className='video-description'>
								<p className='video-title'>{currentVideoDetail.title}</p>
								<div className='video-cta not-selectable'>
									<div
										onClick={() => likeHandler(currentVideoDetail)}
										className={`cta-btn ${isVideoLiked ? 'cta-btn-selected' : ''}`}
									>
										{isVideoLiked ? <LikeFilledIcon /> : <LikeIcon />}Like
									</div>
									<div
										className={`cta-btn ${isVideoInWatchLater ? 'cta-btn-selected' : ''}`}
										onClick={() => addToWatchLaterHandler(currentVideoDetail)}
									>
										{isVideoInWatchLater ? <FilledWatchLaterIcon /> : <WatchLaterIcon />} Watch Later
									</div>
									<div className='cta-btn' onClick={() => addToPlaylistHandler(currentVideoDetail)}>
										<AddToPlaylistIcon /> Playlist
									</div>
								</div>
							</div>

							<div className='meta-data text-grey'>
								<span className='views'>{currentVideoDetail.views} views </span>·
								<span className='date'> {currentVideoDetail.date}</span>
							</div>
						</div>

						<hr />
						<div className='creator-description'>
							<div className='avatar avatar-sm not-selectable '>{currentVideoDetail.creator?.substring(0, 1).toUpperCase()}</div>
							<p className='creator-name'>{currentVideoDetail.creator}</p>
						</div>

						<section className='video-description-text'>
							<p>{currentVideoDetail.description}</p>
							<p>Category: {currentVideoDetail.categoryName}</p>
						</section>
					</>
				)}
			</div>
			<SuggestedVideos videoURLId={videoURLId} randomlySortedVideos={randomlySortedVideos} />
		</div>
	);
};

export { SingleVideoPage };
