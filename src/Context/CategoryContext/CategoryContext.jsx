import { createContext, useState, useEffect, useContext } from 'react';
import { useAxios } from '../../CustomHooks/useAxios';

const CategoryContext = createContext([]);

const CategoryProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);

	const { response: categoriesResponse, operation: fetchCategory, loading: loadingCategories } = useAxios();

	useEffect(() => {
		categoriesResponse?.categories ? setCategories(categoriesResponse.categories) : getCategories();
	}, [categoriesResponse]);
	const getCategories = () => {
		fetchCategory({
			method: 'GET',
			url: '/api/categories',
		});
	};
	return <CategoryContext.Provider value={{ categories, loadingCategories }}>{children}</CategoryContext.Provider>;
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
