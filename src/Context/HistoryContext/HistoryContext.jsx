import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../../CustomHooks/useAxios';

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
	const [historyList, setHistoryList] = useState([]);

	const { response: historyResponse, operation: historyServerCall, error: historyError } = useAxios();

	const token = localStorage.getItem('token');

	useEffect(() => {
		if (historyResponse?.history) {
			setHistoryList(historyResponse.history);
		} else {
			getHistory();
		}
	}, [historyResponse]);

	const getHistory = () => {
		historyServerCall({
			method: 'GET',
			url: '/api/user/history',
			headers: { authorization: token },
		});
	};

	const addVideoToHistory = (video) => {
		historyServerCall({
			method: 'post',
			url: '/api/user/history',
			data: { video },
			headers: { authorization: token },
		});
	};

	const removeVideoFromHistory = (videoId) => {
		historyServerCall({
			method: 'delete',
			url: `/api/user/history/${videoId}`,
			headers: { authorization: token },
		});
	};

	const removeAllVideosFromHistory = () => {
		historyServerCall({
			method: 'delete',
			url: `/api/user/history/all`,
			headers: { authorization: token },
		});
	};

	return (
		<HistoryContext.Provider value={{ historyList, addVideoToHistory, removeVideoFromHistory, removeAllVideosFromHistory }}>
			{children}
		</HistoryContext.Provider>
	);
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
