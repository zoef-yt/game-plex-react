import { useEffect } from 'react';
import { useFilter, useVideo } from '../../../Context';
import { VideoCard } from './VideoCard';
const VideoListingSection = () => {
	const { videos, loadingVideos } = useVideo();
	const { filterState, filterDispatch } = useFilter();
	useEffect(() => {
		filterState.dataToShow.length === 0 &&
			filterDispatch({
				type: 'SET_DATA',
				payload: videos,
			});
	}, [videos]);
	const isDataToShowEmpty = filterState?.dataToShow;
	const getFilteredData = (state) => {
		const selectedCategoryVideos = selectedCategory(state.selectedCategory, state.dataToShow);
		return selectedCategoryVideos;
	};

	const selectedCategory = (categoryName, dataToShow) => {
		return categoryName === '' || categoryName === 'ALL' ? dataToShow : [...dataToShow].filter((video) => video.categoryName === categoryName);
	};

	return (
		<>
			<div className='video-listing-section text-grey'>Showing result:- {isDataToShowEmpty ? getFilteredData(filterState).length : 0}</div>
			<div className='video-listing-section'>
				{!loadingVideos &&
					isDataToShowEmpty &&
					getFilteredData(filterState).map((video, index) => <VideoCard key={video._id} video={video} index={index} />)}
			</div>
		</>
	);
};

export { VideoListingSection };
