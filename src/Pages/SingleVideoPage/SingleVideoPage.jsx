import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './SingleVideoPage.css';
import { useAuth, useModal, useVideo, useWatchLater } from '../../Context';
import { SuggestedVideos } from './SuggestedVideos';
import { VideoPlayer } from './VideoPlayer';
import { AddToPlaylistIcon, FilledWatchLaterIcon, LikeFilledIcon, LikeIcon, WatchLaterIcon } from '../../Assets/svg/AllSVG';
const SingleVideoPage = () => {
	const { id: videoURLId } = useParams();
	const { videos } = useVideo();
	const [currentVideoDetail, setCurrentVideoDetail] = useState('');
	useEffect(() => {
		const videoDetail = videos.find((video) => video._id === videoURLId);
		if (videoDetail !== -1) {
			setCurrentVideoDetail(videoDetail);
		}
		window.scrollTo(0, 0);
	}, [videoURLId, videos]);

	const randomlySortedVideos = [...videos].sort(() => Math.random() - 0.5);
	const { watchLaterList, addToWatchLater, removeFromWatchLater } = useWatchLater();
	const { user } = useAuth();
	const { openModal } = useModal();

	const isVideoInWatchLater = watchLaterList?.findIndex((vid) => vid._id === videoURLId) === -1 ? false : true;
	const addToWatchLaterHandler = (vid) => {
		user ? (isVideoInWatchLater ? removeFromWatchLater(vid._id) : addToWatchLater(vid)) : openModal('AuthModal');
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
									<div className='cta-btn'>
										<LikeIcon /> Like
										{/*//!TODO Commented for future  */}
										{/* <LikeFilledIcon /> */}
									</div>
									<div
										className={`cta-btn ${isVideoInWatchLater ? 'cta-btn-selected' : ''}`}
										onClick={() => addToWatchLaterHandler(currentVideoDetail)}
									>
										{isVideoInWatchLater ? <FilledWatchLaterIcon /> : <WatchLaterIcon />} Watch Later
									</div>
									<div className='cta-btn'>
										{' '}
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
						<section className='creator-description'>
							<div className='avatar avatar-sm not-selectable '>{currentVideoDetail.creator?.substring(0, 1).toUpperCase()}</div>
							<div className='creator-info'>
								<p className='creator-name'>{currentVideoDetail.creator}</p>
							</div>
						</section>

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
