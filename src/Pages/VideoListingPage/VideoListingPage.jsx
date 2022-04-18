import { CategorySelectionBar } from './components/CategorySelectionBar';
import { VideoListingSection } from './components/VideoListingSection';

const VideoListingPage = () => {
	return (
		<div className='app-main-content'>
			<CategorySelectionBar />
			<VideoListingSection />
		</div>
	);
};

export { VideoListingPage };
