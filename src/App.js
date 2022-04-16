import React from 'react';
import { Footer, Navbar, AppRoutes } from './Pages/index';
function App() {
	return (
		<div className='game-plex-app'>
			<Navbar />
			<AppRoutes />
			<Footer />
		</div>
	);
}

export { App };
