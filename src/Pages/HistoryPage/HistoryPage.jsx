import './HistoryPage.css';
import { VideoCard } from '../VideoListingPage/components/VideoCard';
import { useHistory } from '../../Context';
import { useNavigate } from 'react-router-dom';
import { DeleteIcon } from '../../Assets/svg/AllSVG';
import { useTitle } from '../../CustomHooks/useTitle.jsx';
const HistoryPage = () => {
	const { historyList, removeAllVideosFromHistory, removeVideoFromHistory } = useHistory();
	useTitle('History');
	const navigate = useNavigate();
	return (
		<div className='app-main-content'>
			<h1 className='text-align-center'>History</h1>
			{historyList && historyList.length < 1 ? (
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
						{historyList.map((video, index) => (
							<VideoCard
								key={video._id}
								video={video}
								index={index}
								canDelete={true}
								deleteOnClick={() => removeVideoFromHistory(video._id)}
							/>
						))}
					</div>
				</>
			)}
			<button onClick={removeAllVideosFromHistory} className='btn-fab'>
				<DeleteIcon />
				<p>Delete all</p>
			</button>
		</div>
	);
};

export { HistoryPage };
