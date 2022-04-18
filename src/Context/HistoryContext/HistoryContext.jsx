import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../../CustomHooks/useAxios';

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
	const [historyList, useHistoryList] = useState([
		{
			_id: '-R58pnOyuvc',
			title: '200 IQ hide and seek Among us w/GaurgeX | stream Highlight',
			creator: 'Zoef Games',
			categoryName: 'Gameplay',
		},
		{
			_id: 'RcO2bNGOvFA',
			title: 'Funny Moments from Among us | Twitch Highlight | Zoef Games',
			creator: 'Zoef Games',
			categoryName: 'Gameplay',
		},
		{
			_id: 'SzuoB4_RpT4',
			title: "Marvel's Avengers Review(*NO SPOLIERS*)",
			creator: 'Zoef Games',
			categoryName: 'Podcast',
		},
	]);
	return <HistoryContext.Provider value={{ historyList }}>{children}</HistoryContext.Provider>;
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
