import React from 'react';
import { useModal } from './Context';
import { Footer, Navbar, AppRoutes, ModalComponent } from './Pages/index';
const App = () => {
	const { isModalOpened, openModal, closeModal, modalChildComponent } = useModal();

	return (
		<div className='game-plex-app'>
			<Navbar />
			<AppRoutes />
			<Footer />
			<ModalComponent isModalOpened={isModalOpened} modalChildComponent={modalChildComponent} closeModal={closeModal} />
		</div>
	);
};

export { App };
