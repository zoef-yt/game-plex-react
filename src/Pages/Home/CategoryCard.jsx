import { useNavigate } from 'react-router-dom';
import { useFilter } from '../../Context';

const CategoryCard = ({ categoryName, src }) => {
	const { filterDispatch } = useFilter();
	const navigate = useNavigate();

	const navigateWithCategory = (e, category) => {
		e.stopPropagation();
		filterDispatch({ type: 'CATEGORY_SELECTION', payload: category });
		navigate('/videos');
	};
	return (
		<div onClick={(e) => navigateWithCategory(e, categoryName)} className='category-card'>
			<h3>{categoryName}</h3>
			<img src={src}></img>
			<button onClick={(e) => navigateWithCategory(e, categoryName)} className='btn btn-primary'>
				Select Category
			</button>
		</div>
	);
};

export { CategoryCard };
