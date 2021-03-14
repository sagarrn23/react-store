import React from 'react';
import Header from './layout/Header/Header';
import ROUTES, { RenderRoutes } from '../routes';
import Footer from './layout/Footer/Footer';

function App() {
	return (
		<div className="App min-h-screen flex flex-col text-white dark:bg-gray-800">
			<Header />
			{RenderRoutes(ROUTES)}
			<Footer />
		</div>
	);
}

export default App;
