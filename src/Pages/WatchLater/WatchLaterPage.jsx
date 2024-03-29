import { useWatchLater } from '../../Context';
import { useTitle } from '../../CustomHooks/useTitle';
import { VideoCard } from '../VideoListingPage/components/VideoCard';

import './WatchLaterPage.css';

const WatchLaterPage = () => {
	const { watchLaterList } = useWatchLater();
	useTitle('Watch Later');
	return (
		<div className='app-main-content'>
			<h1 className='text-align-center'>Watch Later</h1>
			{watchLaterList != undefined && watchLaterList.length < 1 ? (
				<h3 className='text-align-center'>Nothing to watch later</h3>
			) : (
				<>
					<div className='video-listing-section text-grey'>Showing result:- {watchLaterList.length}</div>
					<div className='video-listing-section'>
						{watchLaterList.map((video, index) => (
							<VideoCard key={video._id} video={video} watchLaterClass={'video-card-in-watch-later'} index={index} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export { WatchLaterPage };
