import './CategorySelectionBar.css';
import { useCategory } from '../../../Context';

const CategorySelectionButton = ({ buttonName }) => {
	return (
		<div className='dropdown'>
			<button className='btn btn-category btn-primary '>{buttonName}</button>
		</div>
	);
};

const CategorySelectionBar = () => {
	const { categories, loadingCategories } = useCategory();

	return (
		<aside className='category-section'>
			<div className='product-category-bar'>
				<div
					className='category-items'
					style={{
						gridTemplateColumns: ` calc(11.1rem + 2vw) repeat(${
							!!categories && categories.length
						}, minmax(calc(15.1rem + 2vw), max-content))`,
					}}
				>
					<CategorySelectionButton buttonName={'ALL'} />
					{!loadingCategories &&
						categories.map(({ _id, categoryName, src }) => <CategorySelectionButton key={_id} buttonName={categoryName} />)}
				</div>
			</div>
		</aside>
	);
};

export { CategorySelectionBar };
