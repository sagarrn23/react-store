import React from 'react';
import App from './components/App';
import Blog from './components/pages/Blog/Blog';
import Shop from './components/pages/Shop/Shop';
import { Route, Switch } from 'react-router-dom';

const ROUTES = [
	{
		path: '/',
		exact: true,
		component: App
	},
	{
		path: '/blog',
		exact: true,
		component: Blog
	},
	{
		path: '/shop',
		exact: true,
		component: Shop
	}
];

export default ROUTES;

function RouteWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			component={route.component}
		/>
	);
}

export function RenderRoutes(routes) {
	return (
		<Switch>
			{routes.map((route) => {
				return RouteWithSubRoutes(route);
			})}
		</Switch>
	);
}
