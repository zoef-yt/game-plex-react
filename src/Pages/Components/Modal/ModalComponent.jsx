import { AuthModalComponent } from './ModalContent/AuthModalComponent';

const ModalComponent = ({ isModalOpened, closeModal, modalChildComponent }) => {
	const setModalData = (modalChildName) => {
		switch (modalChildName) {
			case 'AuthModal':
				return <AuthModalComponent />;
			default:
				return (
					<button className='btn btn-secondary' onClick={closeModal}>
						Close
					</button>
				);
		}
	};
	return (
		<div onClick={() => closeModal()} className={`${isModalOpened ? 'modal-opened' : 'modal-display-none'}`}>
			{setModalData(modalChildComponent)}
		</div>
	);
};

export { ModalComponent };
