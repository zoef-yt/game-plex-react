import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../../CustomHooks/useAxios';

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
	const [watchLaterList, useWatchLaterList] = useState([
		{ _id: 'O-w-NKMowIY', title: 'Valorant Skin Challenge | Zoef Games', creator: 'Zoef Games', categoryName: 'Challenges', id: '1' },
		{ _id: 'SzuoB4_RpT4', title: "Marvel's Avengers Review(*NO SPOLIERS*)", creator: 'Zoef Games', categoryName: 'Podcast', id: '2' },
	]);
	return <WatchLaterContext.Provider value={{ watchLaterList }}>{children}</WatchLaterContext.Provider>;
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
