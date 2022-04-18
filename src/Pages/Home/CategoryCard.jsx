import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ categoryName, src }) => {
	const navigate = useNavigate();
	return (
		<div className='category-card'>
			<h3>{categoryName}</h3>
			<img src={src}></img>
			<button onClick={() => navigate('/videos')} className='btn btn-primary'>
				Select Category
			</button>
		</div>
	);
};

export { CategoryCard };
