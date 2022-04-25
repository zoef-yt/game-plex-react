import MockmanEs from 'mockman-js';
import { Routes, Route } from 'react-router-dom';
import { Home, VideoListingPage, LikedVideosPage, PlaylistPage, HistoryPage, WatchLaterPage, PageNotFound, SingleVideoPage } from '../../index.js';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/videos' element={<VideoListingPage />} />
			<Route path='/videos/:id' element={<SingleVideoPage />} />
			<Route path='/my-liked' element={<LikedVideosPage />} />
			<Route path='/my-playlists' element={<PlaylistPage />} />
			<Route path='/my-history' element={<HistoryPage />} />
			<Route path='/my-watch-later' element={<WatchLaterPage />} />
			<Route path='/mock-api' element={<MockmanEs />} />
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
};

export { AppRoutes };
