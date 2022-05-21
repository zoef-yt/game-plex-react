import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../../CustomHooks/useAxios';

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
	const [watchLaterList, setWatchLaterList] = useState([]);
	const { response: watchLaterResponse, operation: watchLaterServerCall, loading: loadingWatchLater, error: watchLaterError } = useAxios();
	const token = localStorage.getItem('token');

	useEffect(() => {
		if (watchLaterResponse?.watchlater) {
			setWatchLaterList(watchLaterResponse.watchlater);
		} else {
			getWatchLater();
		}
	}, [watchLaterResponse]);

	const getWatchLater = () => {
		watchLaterServerCall({
			method: 'GET',
			url: '/api/user/watchlater',
			headers: { authorization: token },
		});
	};

	const addToWatchLater = (video) => {
		watchLaterServerCall({
			method: 'post',
			url: '/api/user/watchlater',
			data: { video },
			headers: { authorization: token },
		});
	};

	const removeFromWatchLater = (videoId) => {
		watchLaterServerCall({
			method: 'delete',
			url: `/api/user/watchlater/${videoId}`,
			headers: { authorization: token },
		});
	};

	return <WatchLaterContext.Provider value={{ watchLaterList, addToWatchLater, removeFromWatchLater }}>{children}</WatchLaterContext.Provider>;
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
