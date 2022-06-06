import { useNavigate } from 'react-router-dom';
import { useTitle } from '../../CustomHooks/useTitle';
import './PageNotFound.css';

const PageNotFound = () => {
	useTitle('404');
	const navigate = useNavigate();
	return (
		<div className='app-main-content page-not-found'>
			<h1 className='text-404'>404</h1>
			<h1> Oh! How did you get here? Nothing to see here</h1>
			<button onClick={() => navigate('/')} className='btn btn-primary'>
				Go to home
			</button>
		</div>
	);
};

export { PageNotFound };
