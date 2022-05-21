import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../../CustomHooks/useAxios';

const LikesContext = createContext();

const LikesProvider = ({ children }) => {
	const [likesList, setLikesList] = useState([]);
	const { response: likeVideosResponse, operation: likeVideosServerCall, loading: loadingWatchLater, error: likeVideosError } = useAxios();

	const token = localStorage.getItem('token');

	useEffect(() => {
		if (likeVideosResponse?.likes) {
			setLikesList(likeVideosResponse.likes);
		} else {
			getLikedVideo();
		}
	}, [likeVideosResponse]);

	const getLikedVideo = () => {
		likeVideosServerCall({
			method: 'GET',
			url: '/api/user/likes',
			headers: { authorization: token },
		});
	};

	const addVideoToLike = (video) => {
		likeVideosServerCall({
			method: 'post',
			url: '/api/user/likes',
			data: { video },
			headers: { authorization: token },
		});
	};

	const removeVideoFromLike = (videoId) => {
		likeVideosServerCall({
			method: 'delete',
			url: `/api/user/likes/${videoId}`,
			headers: { authorization: token },
		});
	};

	return <LikesContext.Provider value={{ likesList, removeVideoFromLike, addVideoToLike }}>{children}</LikesContext.Provider>;
};

const useLikes = () => useContext(LikesContext);

export { LikesProvider, useLikes };
