import React from 'react';
import { useVideo } from '../../../Context';
import '../VideoListingPage.css';

import { AddToPlaylistIcon, WatchLaterIcon } from '../../../Assets/svg/AllSVG.jsx';
const VideoCard = ({ video }) => {
	const { _id, title, creator, categoryName } = video;
	return (
		<div className='video-card'>
			<img src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} />
			<div className='video-card-watch-later'>
				<WatchLaterIcon />
			</div>
			<div className='video-card-add-to-playlist'>
				<AddToPlaylistIcon />
			</div>
			<h5 title={title} className='video-card-title'>
				{title}
			</h5>
			<div className='flex-row space-between'>
				<div className='video-card-creator '>by:{creator}</div>
				<div className='video-card-podcast'>{categoryName}</div>
			</div>
		</div>
	);
};

const VideoListingSection = () => {
	const { videos, loadingVideos } = useVideo();
	return <div className='video-listing-section'>{!loadingVideos && videos.map((video) => <VideoCard key={video._id} video={video} />)}</div>;
};

export { VideoListingSection };

//! COMMENTED FOR REFERENCE
// imgSrc:- https://i.ytimg.com/vi/JB4TIzOSV-c/maxresdefault.jpg
