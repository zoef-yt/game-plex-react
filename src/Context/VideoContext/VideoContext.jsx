import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../../CustomHooks/useAxios';

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
	const [videos, setVideos] = useState('');

	const { response: videosResponse, operation: fetchVideo, loading: loadingVideos } = useAxios();

	useEffect(() => {
		if (videosResponse?.videos) {
			setVideos(videosResponse.videos);
		} else {
			getVideos();
		}
	}, [videosResponse]);
	const getVideos = () => {
		fetchVideo({
			method: 'GET',
			url: '/api/videos',
		});
	};
	return <VideoContext.Provider value={{ videos, loadingVideos }}>{children}</VideoContext.Provider>;
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
