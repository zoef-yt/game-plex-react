import MockmanEs from 'mockman-js';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../index.js';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/mock-api' element={<MockmanEs />} />
		</Routes>
	);
};

export { AppRoutes };
