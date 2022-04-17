import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: 'Gameplay',
		src: 'https://www.dexerto.com/wp-content/uploads/2021/12/21/pewdie-finally-returns-to-playing-minecraft-and-youtube-fans-are-losing-their-minds.jpg',
	},
	{
		_id: uuid(),
		categoryName: 'Vlog',
		src: 'https://cdn.vox-cdn.com/thumbor/UCf4QIYEdCI-agfr44FgpNXfsoA=/0x24:1684x866/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/16294599/Screen_Shot_2019_05_23_at_7.43.34_AM.png',
	},
	{
		_id: uuid(),
		categoryName: 'FPS',
		src: 'https://playvalorant.com/assets/video/game-overview-poster-launch.jpg',
	},
	{
		_id: uuid(),
		categoryName: 'Challenges',
		src: 'https://i.ytimg.com/vi/jkPvIFRFUZg/hqdefault.jpg',
	},

	{
		_id: uuid(),
		categoryName: 'ScaryGames',
		src: 'https://i.ytimg.com/vi/YRqayjGOpYc/maxresdefault.jpg',
	},
	{
		_id: uuid(),
		categoryName: 'Podcast',
		src: 'https://i.ytimg.com/vi/3-kZAT3nLtA/maxresdefault.jpg',
	},
	{
		_id: uuid(),
		categoryName: 'Rage Gameplay',
		src: 'https://i.ytimg.com/vi/C389KvxsuaI/maxresdefault.jpg',
	},
	{
		_id: uuid(),
		categoryName: 'Unboxing',
		src: 'https://i.ytimg.com/vi/1IY7otlob34/maxresdefault.jpg',
	},
];
