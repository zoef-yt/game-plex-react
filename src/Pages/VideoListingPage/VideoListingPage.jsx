import React from 'react';
import { CategorySelectionBar } from './components/CategorySelectionBar';
import { VideoListingSection } from './components/VideoListingSection';

function VideoListingPage() {
	return (
		<div className='app-main-content'>
			<CategorySelectionBar />
			<VideoListingSection />
		</div>
	);
}

export { VideoListingPage };
