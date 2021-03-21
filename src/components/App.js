import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Header from './layout/Header/Header';
import ROUTES, { RenderRoutes } from '../routes';
import Footer from './layout/Footer/Footer';

function App() {
	return (
		<Provider store={store}>
			<div className="App min-h-screen flex flex-col text-white bg-gray-100 dark:bg-gray-800">
				<Header />
				{RenderRoutes(ROUTES)}
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
