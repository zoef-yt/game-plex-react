import { useContext, createContext, useState, useEffect, useReducer } from 'react';

const initialData = {
	selectedCategory: '',
	dataToShow: [],
};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
	const [filterState, filterDispatch] = useReducer(filterReducer, initialData);
	return <FilterContext.Provider value={{ filterState, filterDispatch }}>{children}</FilterContext.Provider>;
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };

const filterReducer = (state, action) => {
	switch (action.type) {
		case 'SET_DATA':
			return {
				...state,
				dataToShow: action.payload,
			};
		case 'CATEGORY_SELECTION':
			return {
				...state,
				selectedCategory: action.payload,
			};
		case 'CLEAR_ALL':
			return {
				...state,
				dataToShow: action.payload,
				selectedCategory: '',
			};
	}
};
