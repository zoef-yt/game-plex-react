import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CategorySelectionBar } from './components/CategorySelectionBar';
import { VideoListingSection } from './components/VideoListingSection';
import { useTitle } from '../../CustomHooks/useTitle';

const VideoListingPage = () => {
	useTitle('Videos');
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
