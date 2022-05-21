import './CategorySelectionBar.css';
import { useCategory, useFilter } from '../../../Context';

const CategorySelectionButton = ({ buttonName }) => {
	const { filterState, filterDispatch } = useFilter();
	const isSelectedButton = filterState.selectedCategory === buttonName ? true : false;
	return (
		<div onClick={() => filterDispatch({ type: 'CATEGORY_SELECTION', payload: buttonName })} className='dropdown'>
			<button className={`btn btn-category ${isSelectedButton ? 'btn-outline-primary' : 'btn-primary'} `}>{buttonName}</button>
		</div>
	);
};

const CategorySelectionBar = () => {
	const { categories, loadingCategories } = useCategory();

	return (
		<aside className='category-section'>
			<div
				className='category-items'
				style={{
					gridTemplateColumns: ` calc(11.1rem + 2vw) repeat(${categories && categories.length}, minmax(calc(15.1rem + 2vw), max-content))`,
				}}
			>
				<CategorySelectionButton buttonName={'ALL'} />
				{!loadingCategories &&
					categories.map(({ _id, categoryName, src }) => <CategorySelectionButton key={_id} buttonName={categoryName} />)}
			</div>
		</aside>
	);
};

export { CategorySelectionBar };
