import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../../CustomHooks/useAxios';

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
	const [playlists, setPlaylist] = useState({ playlists: [] });
	const [currentVideo, setCurrentVideo] = useState(null);
	const { response: playlistResponse, operation: playlistServerCall, error: playlistError } = useAxios();

	const token = localStorage.getItem('token');

	useEffect(() => {
		if (playlistResponse != null && playlistResponse.playlists) {
			setPlaylist(playlistResponse);
		} else {
			getPlaylists();
		}

		if (playlistResponse != null && playlistResponse.playlist) {
			const updatedPlaylists = playlists.playlists.map((playlist) => {
				return playlist._id === playlistResponse.playlist._id ? playlistResponse.playlist : playlist;
			});
			setPlaylist({ playlists: updatedPlaylists });
		}
	}, [playlistResponse]);

	const selectCurrentVideo = (vid) => {
		setCurrentVideo(vid);
	};

	const removeCurrentVideo = () => {
		setCurrentVideo(null);
	};

	const getPlaylists = () => {
		playlistServerCall({
			method: 'get',
			url: '/api/user/playlists',
			headers: { authorization: token },
		});
	};

	const createPlaylist = (newPlaylist) => {
		playlistServerCall({
			method: 'post',
			url: '/api/user/playlists',
			data: newPlaylist,
			headers: { authorization: token },
		});
	};

	const deleteSinglePlaylist = (playlistId) => {
		playlistServerCall({
			method: 'delete',
			url: `/api/user/playlists/${playlistId}`,
			headers: { authorization: token },
		});
	};

	const postVideoToSinglePlaylist = (video, playlistId) => {
		playlistServerCall({
			method: 'post',
			url: `/api/user/playlists/${playlistId}`,
			data: { video: video },
			headers: { authorization: token },
		});
	};

	const deleteSingleVideoFromPlaylist = (videoId, playlistId) => {
		playlistServerCall({
			method: 'delete',
			url: `/api/user/playlists/${playlistId}/${videoId}`,
			headers: { authorization: token },
		});
	};

	return (
		<PlaylistContext.Provider
			value={{
				currentVideo,
				playlists,
				createPlaylist,
				deleteSinglePlaylist,
				selectCurrentVideo,
				removeCurrentVideo,
				postVideoToSinglePlaylist,
				deleteSingleVideoFromPlaylist,
			}}
		>
			{children}
		</PlaylistContext.Provider>
	);
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
