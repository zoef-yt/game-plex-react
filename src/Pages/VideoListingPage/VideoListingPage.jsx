import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CategorySelectionBar } from './components/CategorySelectionBar';
import { VideoListingSection } from './components/VideoListingSection';

const VideoListingPage = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div className='app-main-content'>
			<CategorySelectionBar />
			<VideoListingSection />
		</div>
	);
};

export { VideoListingPage };
