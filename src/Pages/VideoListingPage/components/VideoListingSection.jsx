import { useVideo } from '../../../Context';
import { VideoCard } from './VideoCard';
const VideoListingSection = () => {
	const { videos, loadingVideos } = useVideo();
	return (
		<div className='video-listing-section'>
			{!loadingVideos && videos.map((video, index) => <VideoCard key={video._id} video={video} index={index} />)}
		</div>
	);
};

export { VideoListingSection };

//! COMMENTED FOR REFERENCE
// imgSrc:- https://i.ytimg.com/vi/JB4TIzOSV-c/maxresdefault.jpg
