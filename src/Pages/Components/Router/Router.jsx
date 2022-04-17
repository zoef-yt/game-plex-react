import MockmanEs from 'mockman-js';
import { Routes, Route } from 'react-router-dom';
import { Home, VideoListingPage, PageNotFound } from '../../index.js';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/videos' element={<VideoListingPage />} />
			<Route path='/mock-api' element={<MockmanEs />} />
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
};

export { AppRoutes };
