import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../../CustomHooks/useAxios';

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
	const [playlist, usePlaylist] = useState([
		{
			_id: 'first',
			name: 'First playlist',
			videos: [
				{ _id: 'O-w-NKMowIY', title: 'Valorant Skin Challenge | Zoef Games', creator: 'Zoef Games', categoryName: 'Challenges', id: '1' },
				{ _id: 'SzuoB4_RpT4', title: "Marvel's Avengers Review(*NO SPOLIERS*)", creator: 'Zoef Games', categoryName: 'Podcast', id: '2' },
				{ _id: 'O-w-NKMowIY', title: 'Valorant Skin Challenge | Zoef Games', creator: 'Zoef Games', categoryName: 'Challenges', id: '1' },
				{ _id: 'SzuoB4_RpT4', title: "Marvel's Avengers Review(*NO SPOLIERS*)", creator: 'Zoef Games', categoryName: 'Podcast', id: '2' },
				{ _id: 'O-w-NKMowIY', title: 'Valorant Skin Challenge | Zoef Games', creator: 'Zoef Games', categoryName: 'Challenges', id: '1' },
				{ _id: 'SzuoB4_RpT4', title: "Marvel's Avengers Review(*NO SPOLIERS*)", creator: 'Zoef Games', categoryName: 'Podcast', id: '2' },
				{ _id: 'O-w-NKMowIY', title: 'Valorant Skin Challenge | Zoef Games', creator: 'Zoef Games', categoryName: 'Challenges', id: '1' },
				{ _id: 'SzuoB4_RpT4', title: "Marvel's Avengers Review(*NO SPOLIERS*)", creator: 'Zoef Games', categoryName: 'Podcast', id: '2' },
			],
		},
		{
			_id: 'second',
			name: 'Second playlist',
			videos: [
				{ _id: 'O-w-NKMowIY', title: 'Valorant Skin Challenge | Zoef Games', creator: 'Zoef Games', categoryName: 'Challenges', id: '1' },
				{ _id: 'SzuoB4_RpT4', title: "Marvel's Avengers Review(*NO SPOLIERS*)", creator: 'Zoef Games', categoryName: 'Podcast', id: '2' },
			],
		},
		{
			_id: 'third',
			name: 'Third playlist',
			videos: [
				{ _id: 'O-w-NKMowIY', title: 'Valorant Skin Challenge | Zoef Games', creator: 'Zoef Games', categoryName: 'Challenges', id: '1' },
				{ _id: 'SzuoB4_RpT4', title: "Marvel's Avengers Review(*NO SPOLIERS*)", creator: 'Zoef Games', categoryName: 'Podcast', id: '2' },
			],
		},
	]);
	return <PlaylistContext.Provider value={{ playlist }}>{children}</PlaylistContext.Provider>;
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
