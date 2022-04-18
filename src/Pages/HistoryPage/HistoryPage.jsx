import './HistoryPage.css';
import { VideoCard } from '../VideoListingPage/components/VideoCard';
import { useHistory } from '../../Context';
import { useNavigate } from 'react-router-dom';

const HistoryPage = () => {
	const { historyList } = useHistory();
	const navigate = useNavigate();
	return (
		<div className='app-main-content'>
			<h1 className='text-align-center'>History</h1>
			{historyList != undefined && historyList.length < 1 ? (
				<h3 className='text-align-center'>
					Watch Something?
					<span className='btn-link' onClick={() => navigate('/videos')}>
						Videos
					</span>
				</h3>
			) : (
				<>
					<div className='video-listing-section text-grey'>Showing result:- {historyList.length}</div>
					<div className='video-listing-section'>
						{historyList.map((video) => (
							<VideoCard key={video._id} video={video} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export { HistoryPage };
