import { useEffect } from 'react';
import { useCategory, useFilter, useVideo } from '../../Context';
import { CategoryCard } from './CategoryCard';
import './Home.css';
const Home = () => {
	const { categories, loadingCategories } = useCategory();
	const { videos } = useVideo();
	const { filterState, filterDispatch } = useFilter();
	useEffect(() => {
		filterState.dataToShow.length === 0 &&
			filterDispatch({
				type: 'SET_DATA',
				payload: videos,
			});
	}, [videos]);
	return (
		<div className='app-main-content home-body'>
			{/* //!TODO THE IFRAME WILL BE EXTRACTED AND WILL BE USED AS AND COMPONENT IN THE NEXT PR */}
			<iframe
				className='home-iframe'
				src='https://www.youtube.com/embed/CPhsVcNBKJ0?playlist=CPhsVcNBKJ0&autoplay=1&loop=1&showinfo=0&rel=0'
				title='Test Video'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>

			<section className='home-category-section'>
				<h1>All Categories</h1>
				<hr />

				<div className='categories-listing video-listing-section'>
					{!loadingCategories &&
						categories.map(({ _id, categoryName, src }) => <CategoryCard key={_id} categoryName={categoryName} src={src} />)}
				</div>
			</section>
		</div>
	);
};

export { Home };
