import { useEffect } from 'react';

const useTitle = (title) => {
	useEffect(() => {
		if (title) document.title = `${title} | Game Plex`;
		else document.title = 'Game Plex';
	}, [title]);
};

export { useTitle };
