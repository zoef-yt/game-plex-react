import { AuthModalComponent } from './ModalContent/AuthModalComponent';
import { PlaylistModalComponent } from './ModalContent/PlaylistModalComponent';

const ModalComponent = ({ isModalOpened, closeModal, modalChildComponent }) => {
	const setModalData = (modalChildName) => {
		switch (modalChildName) {
			case 'AuthModal':
				return <AuthModalComponent />;
			case 'PlaylistModal':
				return <PlaylistModalComponent />;
			default:
				closeModal();
				return <></>;
		}
	};
	return (
		<div onClick={() => closeModal()} className={`${isModalOpened ? 'modal-opened' : 'modal-display-none'}`}>
			{setModalData(modalChildComponent)}
		</div>
	);
};

export { ModalComponent };
