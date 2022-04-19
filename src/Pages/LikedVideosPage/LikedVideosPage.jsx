import { useLikes } from '../../Context';
import { VideoCard } from '../VideoListingPage/components/VideoCard';
import './LikedVideosPage.css';

const LikedVideosPage = () => {
	const { likesList } = useLikes();
	return (
		<div className='app-main-content'>
			<h1 className='text-align-center'>Liked Videos</h1>
			{likesList?.length < 1 ? (
				<h3 className='text-align-center'>You have not liked any videos</h3>
			) : (
				<>
					<div className='video-listing-section text-grey'>Showing result:- {likesList.length}</div>
					<div className='video-listing-section'>
						{likesList.map((video, index) => (
							<VideoCard key={video._id} video={video} index={index} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export { LikedVideosPage };
