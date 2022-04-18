import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../../CustomHooks/useAxios';

const LikesContext = createContext();

const LikesProvider = ({ children }) => {
	const [likesList, useLikesList] = useState([
		{ _id: 'O-w-NKMowIY', title: 'Valorant Skin Challenge | Zoef Games', creator: 'Zoef Games', categoryName: 'Challenges', id: '1' },
		{ _id: 'SzuoB4_RpT4', title: "Marvel's Avengers Review(*NO SPOLIERS*)", creator: 'Zoef Games', categoryName: 'Podcast', id: '2' },
	]);
	return <LikesContext.Provider value={{ likesList }}>{children}</LikesContext.Provider>;
};

const useLikes = () => useContext(LikesContext);

export { LikesProvider, useLikes };
